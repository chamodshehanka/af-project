import { Request, Response } from "express";
import * as mongodb from "mongodb";
import { MongoHelper } from "../../config/mongodb.config";

const getCollection = () => {
  return MongoHelper.client.db("ShopDB").collection("clients");
};

export default class ClientController {
  // private getCollection: MongoHelper.client.db('').collection();
  // private collection : any = MongoHelper.client.db("ShopDB").collection("clients");

  /**
   * Add Client
   * @param clientID id of the client
   * @param name name of the client
   * @param email client email address
   * @param contactNo client contactNo
   * @returns success or failure message
   */
  public addClient = async (req: Request, res: Response): Promise<any> => {
    const { clientID, name, email, contactNo } = req.body;
    const collection: any = getCollection();

    collection.insert({
      _id: clientID,
      name: name,
      email: email,
      contactNo: contactNo,
    });

    res.send({ message: "Successfully Added" });
    res.end();
  };

  /**
   * Update Client
   * @param clientID id of the client
   * @param name name of the client
   * @param email client email address
   * @param contactNo client contactNo
   * @returns success or failure message
   */
  public updateClient = async (req: Request, res: Response): Promise<any> => {
    const { clientID, name, email, contactNo } = req.body;
    const collection: any = getCollection();

    collection.findOneAndUpdate(
      {
        _id: new mongodb.ObjectId(clientID),
      },
      {
        $set: {
          name: name,
          email: email,
          contactNo: contactNo,
        },
      }
    );

    res.send({ message: "Succesfully Updated" });
    res.end();
  };

  /**
   * @param clientID id of the client
   * @returns success or error message
   */
  public deleteClient = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const { clientID } = req.body;
    collection.remove({ _id: new mongodb.ObjectId(clientID) });
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
        items = items.map((item) => {
          return { id: item._id, description: item.description };
        });
        res.json(items);
      }
    });
  };
}
