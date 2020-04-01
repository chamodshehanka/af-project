import { Router } from "express";
import Controller from "./client.controller";

const clients: Router = Router();
const controller = new Controller();

// Add Client
clients.post("/client/add", controller.addClient);

// Get Client List
clients.post("/list", controller.getClients);

export default clients;
