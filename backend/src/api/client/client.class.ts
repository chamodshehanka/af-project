import * as mongoose from "mongoose";
import { IClient } from "./client.interface";

export const ClientSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: String,
  contactNo: Number
});

const Client = mongoose.model<IClient>("Client", ClientSchema);
export default Client;
