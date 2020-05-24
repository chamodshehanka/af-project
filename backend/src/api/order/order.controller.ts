import { Request, Response } from 'express';
import { MongoHelper } from '../../config/mongodb.config';
import OrderSchema from './order.class';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('orders');
};

export default class OrderController {
  /**
   * Add Order
   * @param orderId id of the order
   *
   *  @returns success or error message
   */
  public addOrder = async (req: Request, res: Response): Promise<any> => {
    const {
      clientId,
      orderDetails,
      paymentMethod,
      totalPrice,
      deliveryDetails,
    } = req.body;
    const collection: any = getCollection();

    // const date = new Date();
    // console.log(req.body);
    const order = new OrderSchema(req.body);

    collection
      .insertOne(order)
      .then(() => {
        res.send({ message: 'Successfully Added' });
        res.end();
      })
      .catch((err) => {
        res.send({ message: 'Unable to Add' });
        console.error(err);
      });
  };
}
