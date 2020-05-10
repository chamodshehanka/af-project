import { Router } from 'express';
import Controller from './product.controller';

const products: Router = Router();
const controller = new Controller();

export default products;
