import express from "express";
import { Client } from "../models/client.model";

const clientController = express.Router();

clientController.get("/", (req, res) => {
  Client.find({}, (err, result) => {
    res.status(200).json({
      data: result
    });
  });
});
