import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import { MongoHelper } from '../../config/mongodb.config';
import storeManagerSchema from './storeManager.class';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('storeManager');
};

export default class storeManagerController {
  /**
   * Add storeManager
   * @param storeManagerId id of the storeManager
   * @param name name of the storeManager
   * @param email storeManager email address
   * @param contactNo storeManager contactNo
   * @param password storeManager password
   * @returns success or failure message
   */
  public addStoreManager = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();
    const storeManager = new storeManagerSchema(requestData);

    collection
      .insertOne(storeManager)
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
   * Update storeManager
   * @param storeManagerId id of the storeManager
   * @param name name of the storeManager
   * @param email storeManager email address
   * @param contactNo storeManager contactNo
   * @param password storeManager password
   * @returns success or failure message
   */
  public updateStoreManager = async (req: Request, res: Response): Promise<any> => {
    const { storeManagerId, name, email, password, contactNo} = req.body;
    const collection: any = getCollection();

    collection
      .findOneAndUpdate(
        {
          _id: new mongodb.ObjectId(storeManagerId),
        },
        {
          $set: {
            name: name,
            email: email,
            password: password,
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
   * @param storeManagerId id of the storeManager
   * @returns success or error message
   */
  public deleteStoreManager = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const { storeManagerId } = req.body;
    collection
      .remove({ _id: new mongodb.ObjectId(storeManagerId) })
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
   * Get storeManager by id
   * @param storeManagerId id of storeManager
   * @returns storeManager json
   */
  public getStoreManagerByID = async (req: Request, res: Response): Promise<any> => {
    const { storeManagerId } = req.body;
    const collection: any = getCollection();

    collection
      .findById(storeManagerId)
      .then((storeManager) => {
        res.send(storeManager);
      })
      .catch((err) => {
        console.error('Unable to find this client');
      });
  };

  /**
   * Get storeManager
   * @returns storeManager list or failure message
   */
  public getStoreManager = async (req: Request, res: Response): Promise<any> => {
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
              password:item.password,
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
