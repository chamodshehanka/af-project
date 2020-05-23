import * as mongoose from 'mongoose';
import { IProduct } from '../product/product.interface';

export interface ICart extends mongoose.Document {
  id: string;
  clientId: string;
<<<<<<< HEAD
  //items: IProduct[];
=======
  // items: IProduct[];
>>>>>>> 73a0a31e669ef8abe0cceeba6ee1ddf91c1673a9
}
