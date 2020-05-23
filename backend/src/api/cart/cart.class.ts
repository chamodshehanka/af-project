import * as mongoose from 'mongoose';
import { ICart } from './cart.interface';
import Product from '../product/product.class';

export const CartSchema = new mongoose.Schema({
  id: { type: String, required: true },
  clientId: { type: String, required: true },
<<<<<<< HEAD
  //items: { type: Product, required: false },
=======
  // items: { type: Product, required: false },
>>>>>>> 73a0a31e669ef8abe0cceeba6ee1ddf91c1673a9
});

const Cart = mongoose.model<ICart>('Cart', CartSchema);
export default Cart;
