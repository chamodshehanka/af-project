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
    const { clientId, productId, productPrice,quantity } = req.body;
    const collection: any = getCollection();

    try {
      let cart = await collection.findOne({ clientId });
      console.log(cart);

      if (cart !== null) {
        // Cart list exists for user
        let itemIndex = cart.items.findIndex((p) => p.productId === productId);

        if (itemIndex > -1) {
          let productItem = cart.items[itemIndex];
          cart.items[itemIndex] = productItem;
        } else {
          cart.items.push({ productId, productPrice });
        }

        await collection.findOneAndUpdate({
          clientId: clientId,
        }, 
        {
          $set: {
            items: cart.items,
          }
        }).then(() => {
          res.send(cart);
        })
      } else {
        // no cart for user
        const newCart = await collection.insertOne({
          clientId,
          items:[{productId, productPrice, quantity}]
        })

        
      }
    } catch (err) {
      console.error(err);
      res.send({ message: 'Unable to Add' });
    }
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
