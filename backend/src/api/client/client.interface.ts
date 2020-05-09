import * as mongoose from 'mongoose';

export interface IClient extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  contactNo: number;
}
