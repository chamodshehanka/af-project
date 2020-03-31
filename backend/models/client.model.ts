import * as mongoose from "mongoose";

export interface IClient extends mongoose.Document {
  name: string;
  email:string;
  contactNo: number;
}

export const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  contactNo: Number
});

const Client = mongoose.model<IClient>("Client", ClientSchema);
export default Client;
