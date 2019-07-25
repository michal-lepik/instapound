import * as express from 'express';
import { getRepository } from 'typeorm';

import { Post } from '../../entities/Post';

const router = express.Router();
const postRepository = getRepository(Post);

router.get('/', async (req, res) => {
    const posts = await postRepository.find();
    res.json(posts);
});

module.exports = router;
