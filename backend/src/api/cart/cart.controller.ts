import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import { MongoHelper } from '../../config/mongodb.config';
import CartSchema from './cart.class';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('cart');
};

export default class CartController {
  /**
   * Add Cart
   * @param cartId id of the cart
   *
   * @returns sucess or error message
   */
  public addCart = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();
    const cart = new CartSchema(requestData);

    collection
      .insertOne(cart)
      .then(() => {
        res.send({ message: 'New cart is successfully created' });
        res.end();
      })
      .catch((err) => {
        res.send({ message: 'Unable to create cart' });
        console.log(err);
        res.end();
      });
  };

  /**
   * Update Cart
   * @param cartId
   *
   * @returns sucess or error message
   */
  public updateCart = async (req: Request, res: Response): Promise<any> => {
    const { cartId } = req.body;
    const collection: any = getCollection();

    collection
      .fundOneAndUpdate(
        {
          _id: new mongodb.ObjectId(cartId),
        },
        {
          $set: {
            // TODO:add rest fields
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
   * Delete Cart
   * @param cartId
   * @returns sucess or error message
   */
  public deleteCart = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const { cartId } = req.body;

    collection
      .remove({ _id: new mongodb.ObjectId(cartId) })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send('Unable to delete!');
        console.error(err);
      });
  };
}
