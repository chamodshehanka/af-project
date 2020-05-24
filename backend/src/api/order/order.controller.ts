import { Request, Response } from 'express';
import { MongoHelper } from '../../config/mongodb.config';
import OrderSchema from './order.class';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('orders');
};

const getCartCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('carts');
};

export default class OrderController {
  /**
   * Add Order
   * @param orderId id of the order
   *
   *  @returns success or error message
   */
  public addOrder = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    const reqData = req.body;

    // Get Cart Data
    const cartCollection: any = getCartCollection();
    const clientId = reqData.clientId;

    let cart = await cartCollection.findOne({ clientId });

    const order = new OrderSchema({
      orderId: 'O002',
      clientId: clientId,
      orderDetails: cart.items,
      date: new Date(),
      paymentMethod: reqData.paymentMethod,
      totalPrice: reqData.totalPrice,
      deliveryDetails: reqData.deliveryDetails,
    });

    collection
      .insertOne(order)
      .then(() => {
        // TODO:Add Auto remove cart
        if (cart !== null) {
          // await collection
          // .findOneAndUpdate(
          //   { clientId: clientId },
          //   {
          //     $set: {
          //       items: [],
          //     },
          //   }
          // )
          // .then(() => {
          //   res.send(cart);
          // });
        }
        // move
        res.send({ message: 'Successfully Added' });
        res.end();
      })
      .catch((err) => {
        res.send({ message: 'Unable to Add' });
        console.error(err);
      });
  };
}
