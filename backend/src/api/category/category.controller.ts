import { Request, Response } from 'express';
import * as mongodb from 'mongodb';
import { MongoHelper } from '../../config/mongodb.config';
import CategorySchema from './category.class';

const getCollection = () => {
  return MongoHelper.client.db('ShopDB').collection('categories');
};

export default class CategoryController {
  /**
   * Add Category
   * @param categoryID id of the category
   * @param name name of the category
   * @param description description of the category
   * @param image image url of the category
   * @param featured featured boolean of the category
   * @param productCount no of Products is the category
   * @returns success or failure message
   */
  public addCategoryList = async (req: Request, res: Response): Promise<any> => {
    const requestData = req.body;
    const collection: any = getCollection();
    const categories = new CategorySchema(requestData);

    collection
      .insertOne(categories)
      .then(() => {
        res.send({ message: 'New category is successfully Added' });
        res.end();
      })
      .catch((err) => {
        res.send({ message: 'Unable to add category' });
        console.error(err);
      });
  };




  /**
   * Get Categories
   * @returns categories list or failure message
   */
  public getCategories = async (req: Request, res: Response): Promise<any> => {
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
              description: item.description,
              image: item.image,
              featured: item.featured,
              productCount: item.productCount
            };
          });
          res.json(items);
        }
      })
      .catch((err) => {
        res.send('Unable to get categories');
        console.error(err);
      });
  };

    /**
   * Get Featured Categories
   * @returns featured categories list or failure message
   */
  public getFeaturedCategories = async (req: Request, res: Response): Promise<any> => {
    const collection: any = getCollection();
    collection
      .find({featured: true})
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
              description: item.description,
              image: item.image,
              featured: item.featured,
              productCount: item.productCount
            };
          });
          res.json(items);
        }
      })
      .catch((err) => {
        res.send('Unable to get featured categories');
        console.error(err);
      });
  };
}
