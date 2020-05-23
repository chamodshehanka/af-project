import { Router } from 'express';

import Controller from './cart.controller';

const carts: Router = Router();
const controller = new Controller();

// Add Cart
carts.post('/add', controller.addCart);

// Get Cart Product
carts.post('/get', controller.getCart);

// Update Cart
carts.put('/update', controller.updateCart);

// Delete Cart
carts.delete('/delete', controller.deleteCart);

export default carts;
