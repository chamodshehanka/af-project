import { Router } from "express";
import Controller from "./client.controller";

const clients: Router = Router();
const controller = new Controller();

// need to remove
clients.get("/", (req, res) => {
  res.send("Response from Client NodeTS Server");
});

// Add Client
clients.post("/add", controller.addClient);

// Update Client
clients.put("/update", controller.updateClient);

// Delete Client
clients.delete("/delete", controller.deleteClient);

// Get Client By ID
clients.get("/get", controller.getClientByID);

// Get Client List
clients.get("/list", controller.getClients);

export default clients;
