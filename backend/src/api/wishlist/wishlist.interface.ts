import * as mongoose from 'mongoose';

export interface IWishList extends mongoose.Document{
    id:string;
    clientId:String;
    items:[]
    totalQuantity:Number
}