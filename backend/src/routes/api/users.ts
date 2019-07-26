import * as express from 'express';
import { getRepository } from 'typeorm';

import { User } from '../../entities/User';

const router = express.Router();
const userRepository = getRepository(User);

router.get('/', async (req, res) => {
    const users = await userRepository.find();
    res.json(users);
});

router.post('/', async (req, res) => {
    const user = await userRepository.create(req.body);

    const results = await userRepository.save(user).catch(err => {
        res.status(400).json({ msg: `Error: ${err}` });
    });

    return res.send(results);
});

module.exports = router;
