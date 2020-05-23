import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import { MongoHelper } from '../../config/mongodb.config';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('carts');
};

export default class CartController {
  /**
   * Add Cart
   * @param cartId id of the cart
   *
   * @returns sucess or error message
   */
  public addCart = async (req: Request, res: Response): Promise<any> => {
    const { clientId, productId, productPrice, quantity } = req.body;
    const collection: any = getCollection();

    try {
      let cart = await collection.findOne({ clientId });

      if (cart !== null) {
        // Cart list exists for user
        let itemIndex = cart.items.findIndex((p) => p.productId === productId);

        if (itemIndex > -1) {
          let productItem = cart.items[itemIndex];
          cart.items[itemIndex] = productItem;
        } else {
          cart.items.push({ productId, productPrice, quantity });
        }

        await collection
          .findOneAndUpdate(
            {
              clientId: clientId,
            },
            {
              $set: {
                items: cart.items,
              },
            }
          )
          .then(() => {
            res.send(cart);
          });
      } else {
        // no cart for user
        const newCart = await collection.insertOne({
          clientId,
          items: [{ productId, productPrice, quantity }],
        });
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
   * @param clientId
   * @returns success or error message
   */
  public deleteCart = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const clientId = req.params.id;
    const productId = req.query.productId;

    try {
      let cart = await collection.findOne({ clientId });
      if (cart !== null) {
        let itemIndex = cart.items.findIndex((p) => p.productId === productId);

        cart.items.splice(itemIndex, 1);

        await collection
          .findOneAndUpdate(
            { clientId: clientId },
            {
              $set: {
                items: cart.items,
              },
            }
          )
          .then(() => {
            res.send(cart);
          });
      } else {
        res.send({ message: 'Unable to find the cart ' + clientId });
      }
    } catch (err) {
      console.error(err);
      res.send('something went wrong');
    }
  };

  /**
   * Get Cart by Client ID
   * @param clientId
   * @returns cart
   */
  public getCart = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const clientId = req.params.id;

    let cart = await collection.findOne({ clientId });

    res.send(cart);
  };
}
