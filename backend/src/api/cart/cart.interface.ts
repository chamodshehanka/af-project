import * as mongoose from 'mongoose';

export interface ICart extends mongoose.Document {
    id: string;
    clientId: string;
    // items: product[];
}