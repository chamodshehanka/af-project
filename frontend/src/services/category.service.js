/* eslint-disable no-console */
import Axios from 'axios';
// import FormData from 'form-data';
import { environment } from '../configs/environment';

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
