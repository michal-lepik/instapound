import * as express from 'express';
import { getRepository } from 'typeorm';

import { Comment } from '../../entities/Comment';

const router = express.Router();
const commentRepository = getRepository(Comment);

router.get('/', async (req, res) => {
    const comments = await commentRepository.find();
    res.json(comments);
});

router.get('/:id', async (req, res) => {
    const comment = await commentRepository.findOne(req.params.id);

    comment ? res.json(comment) : res.status(404).json({ msg: 'No comment found' });
});

router.get('/post/:id', async (req, res) => {
    const comments = await commentRepository.find({ postId: req.params.id });
    res.json(comments);
});

router.post('/', async (req, res) => {
    const comment = await commentRepository.create(req.body);

    const results = await commentRepository.save(comment).catch(err => {
        res.status(400).json({ msg: `Error: ${err}` });
    });

    return res.send(results);
});

module.exports = router;
