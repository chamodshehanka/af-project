import express from "express";
const app = express();
import { urlencoded, json } from "body-parser";
const PORT = 4000;
import cors from "cors";
import fetch from "node-fetch";

import { clientController } from "./controller/client.controller";

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// Use all controller APIs here
app.use("/", clientController);

app.listen(PORT, function() {
  console.log("server is running on port : ", PORT);
});
