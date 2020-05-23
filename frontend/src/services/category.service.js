import Axios from 'axios';
import { environment } from '../configs/environment';

export function addCategory(data, image) {
   
    Axios.post(environment.baseURL + 'category/add', data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => console.error(err));
  }

// Get all categories
export function getAllCategories() {
  var array;

  Axios.get(environment.baseURL + 'category/list')
    .then((e) => {
      console.log(e.data);

      array = e.data;

      return e.data;
    })
    .catch((err) => console.error(err));

  return array;
}
