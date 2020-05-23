import * as mongoose from 'mongoose';
import { ICart } from './cart.interface';

export const CartSchema = new mongoose.Schema({
  id: { type: String, required: true },
});

const Cart = mongoose.model<ICart>('Cart', CartSchema);
export default Cart;
