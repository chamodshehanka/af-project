import { Router } from 'express';
import client from './client/client.route';

const router: Router = Router();

router.use('/user', client);

export default router;