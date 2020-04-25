import * as mongoose from "mongoose";

export interface IProduct extends mongoose.Document {
  id: string;
  name: string;
  category: string;
  description: string;
  stocks: number;
  imageGallery: string;
}
