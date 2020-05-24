import Axios from 'axios';
import { environment } from '../configs/environment';

// Get Wish List Items
export function getWishListItems(clientId) {
  var array = [];

  Axios.get(environment.baseURL + 'wishList/get/' + clientId)
    .then((e) => {
      array = e.data.items;
      console.log(array);
      return array;
    })
    .catch((err) => console.error(err));
  return array;
}

// Add to Wish List Items
export function addToWishList(clientId, productId) {
  const data = {
    clientId: clientId,
    productId: productId,
  };
  Axios.post(environment.baseURL + 'wishList/add', data)
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));
}
