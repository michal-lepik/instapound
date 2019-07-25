import * as express from 'express';
import { getRepository } from 'typeorm';

import { Comment } from '../../entities/Comment';

const router = express.Router();
const commentRepository = getRepository(Comment);

router.get('/', async (req, res) => {
    const comments = await commentRepository.find();
    res.json(comments);
});

module.exports = router;
