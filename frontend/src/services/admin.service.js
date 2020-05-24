import Axios from 'axios';
import { environment } from '../configs/environment';

//add store manager
export function addStoreManager(data) {
  Axios.post(environment.baseURL + 'storeManager/add', data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => console.error(err));
}
