import { Router } from "express";
import client from "./client/client.route";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("Response from NodeTS Server");
});

router.use("/client", client);

export default router;
