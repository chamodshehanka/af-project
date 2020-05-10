import { Router } from 'express';
import client from './client/client.route';
import product from './product/product.route';

const router: Router = Router();

router.get('/', (req, res) => {
  res.send('Response from NodeTS Server');
});

router.use('/client', client);
router.use('/product', product);

export default router;
