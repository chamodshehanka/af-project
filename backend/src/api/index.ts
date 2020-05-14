import { Router } from 'express';
import client from './client/client.route';
import product from './product/product.route';
import category from './category/category.route';

const router: Router = Router();

router.get('/', (_req, res) => {
  res.send('Response from NodeTS Server');
});

router.use('/client', client);
router.use('/product', product);
router.use('/category',category);

export default router;
