import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import { MongoHelper } from '../../config/mongodb.config';
import ClientSchema from './client.class';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('clients');
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
    const requestData = req.body;
    const collection: any = getCollection();
    const client = new ClientSchema(requestData);

    collection
      .insertOne(client)
      .then(() => {
        res.send({ message: 'Successfully Added' });
        res.end();
      })
      .catch((err) => {
        res.send({ message: 'Unable to Add' });
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

    collection
      .findOneAndUpdate(
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
      )
      .then(() => {
        res.send({ message: 'Succesfully Updated' });
      })
      .catch((err) => {
        res.send({ message: 'Unable to Update' });
        console.error(err);
      });
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
        res.send('Successfully Deleted!');
      })
      .catch((err) => {
        res.send('Unable to delete!');
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

    collection
      .findById(clientID)
      .then((client) => {
        res.send(client);
      })
      .catch((err) => {
        console.error('Unable to find this client');
      });
  };

  /**
   * Get Clients
   * @returns clients list or failure message
   */
  public getClients = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    collection
      .find({})
      .toArray((err, items) => {
        if (err) {
          res.status(500);
          res.end();
          console.error('Caught error', err);
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
      })
      .catch((err) => {
        res.send('Unable to get clients');
        console.error(err);
      });
  };
}
