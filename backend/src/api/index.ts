import { Router } from 'express';
import client from './client/client.route';
import product from './product/product.route';
import category from './category/category.route';
import storeManager from './admin/storeManager.route';

const router: Router = Router();

router.get('/', (_req, res) => {
  res.send('Response from NodeTS Server');
});

router.use('/client', client);
router.use('/product', product);
router.use('/category',category);
router.use('/storeManager',storeManager);

export default router;
