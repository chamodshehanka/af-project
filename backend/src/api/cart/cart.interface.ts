import * as mongoose from 'mongoose';
import { IProduct } from '../product/product.interface';

export interface ICart extends mongoose.Document {
  id: string;
  clientId: string;
  items: IProduct[];
}
