import * as mongoose from "mongoose";

export interface IClient extends mongoose.Document {
  name: string;
  contactNo: number;
}

export const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNo: Number
});

const Client = mongoose.model<IClient>("Client", ClientSchema);
export default Client;
