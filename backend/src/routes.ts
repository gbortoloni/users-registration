import { Router } from 'express';

import UserController from './controllers/UserController';

const router = Router();

router.get('/users', UserController.index);
router.get('/users/:_id', UserController.show);
router.post('/users', UserController.store);
router.put('/users/:_id', UserController.update);
router.delete('/users/:_id', UserController.destroy);

export default router;
