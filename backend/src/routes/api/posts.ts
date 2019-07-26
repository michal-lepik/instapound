import * as express from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../entities/Post';

const router = express.Router();
const postRepository = getRepository(Post);

router.get('/', async (req, res) => {
    const posts = await postRepository.find();
    res.json(posts);
});

router.post('/', async (req, res) => {
    const post = await postRepository.create(req.body);

    const results = await postRepository.save(post).catch(err => {
        res.status(400).json({ msg: `Error: ${err}` });
    });

    return res.send(results);
});

module.exports = router;
