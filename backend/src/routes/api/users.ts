import * as express from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../entities/User';

const router = express.Router();
const userRepository = getRepository(User);

router.get('/', async (req, res) => {
    const users = await userRepository.find();
    res.json(users);
});

module.exports = router;
