import { Request, Response } from "express";
import { MongoHelper } from "../../config/mongodb.config";

const getCollection = () => {
  return MongoHelper.client.db("ShopDB").collection("clients");
};

export default class ClientController {
  // private getCollection: MongoHelper.client.db('').collection();

  /**
   * Add Client
   * @param name name of the client
   * @param email client email address
   * @param contactNo client contactNo
   * @returns success or failure message
   */
  public addClient = async (req: Request, res: Response): Promise<any> => {
    console.log(req.body);
  };

  /**
   * Get Clients
   * @returns clients list or failure message
   */
  public getClients = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const result = collection.find({}).toArray((err, items) => {
      if (err) {
        res.status(500);
        res.end();
        console.error("Caught error", err);
      } else {
        items = items.map(item => {
          return { id: item._id, description: item.description };
        });
        res.json(items);
      }
    });
  };
}
