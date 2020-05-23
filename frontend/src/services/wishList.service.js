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
