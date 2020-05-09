import * as mongoose from 'mongoose';
import { IProduct } from './product.interface';

export const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  stocks: { type: Number, required: true },
  imageGallery: { type: String, required: true },
});

const Client = mongoose.model<IProduct>('Product', ProductSchema);
export default Client;
