import * as mongoose from 'mongoose';
import {IWishList} from './wishlist.interface';

export const WishListSchema = new mongoose.Schema({
    id:{type:String,required:true},
    clientId:{type:String,required:true},
    items:[],
    totalQuantity:{type:Number,required:true,default:0}
});

const WishList = mongoose.model<IWishList>("WishList",WishListSchema);
export default WishList;
