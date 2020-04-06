import { Request, Response } from "express";
import * as mongodb from "mongodb";
import { MongoHelper } from "../../config/mongodb.config";
import ClientSchema from "./client.class";

const getCollection = () => {
  return MongoHelper.client.db("ShopDB").collection("clients");
};

export default class ClientController {
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
    //  ClientSchema client = new ClientSchema(clientID, name, email, contactNo);

    collection
      .insertOne({
        _id: clientID,
        name: name,
        email: email,
        contactNo: contactNo,
      })
      .then((result) => {
        console.log(result);
        res.send({ message: "Successfully Added" });
        res.end();
      })
      .catch((err) => {
        res.send({message: "Unable to Add"})
        console.error(err);
      });
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
    collection
      .remove({ _id: new mongodb.ObjectId(clientID) })
      .then((result) => {
        console.log(result);
        res.send("Successfully Deleted!");
      })
      .catch((err) => {
        res.send("Unable to delete!");
        console.error(err);
      });
  };

  /**
   * Get client by id
   * @param clientID id of client
   * @returns client json
   */
  public getClientByID = async (req: Request, res: Response): Promise<any> => {
    const { clientID } = req.body;
    const collection: any = getCollection();

    collection.find();
  };

  /**
   * Get Clients
   * @returns clients list or failure message
   */
  public getClients = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    collection.find({}).toArray((err, items) => {
      if (err) {
        res.status(500);
        res.end();
        console.error("Caught error", err);
      } else {
        items = items.map((item) => {
          return {
            id: item._id,
            name: item.name,
            email: item.email,
            contactNo: item.contactNo,
          };
        });
        res.json(items);
      }
    });
  };
}
