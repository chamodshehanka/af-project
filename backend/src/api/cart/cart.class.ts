import * as mongoose from 'mongoose';
import { ICart } from './cart.interface';
import Product from '../product/product.class';

export const CartSchema = new mongoose.Schema({
  id: { type: String, required: true },
  clientId: { type: String, required: true },
  //items: { type: Product, required: false },
});

const Cart = mongoose.model<ICart>('Cart', CartSchema);
export default Cart;
