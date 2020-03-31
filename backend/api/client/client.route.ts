import { Router } from "express";
import Controller from "./client.controller";

const clients: Router = Router();
const controller = new Controller();

// Add Client
clients.post("/credits/add", controller.addClient);

// Get Client List
// clients.post("/list", controller.getUsers);

export default clients;
