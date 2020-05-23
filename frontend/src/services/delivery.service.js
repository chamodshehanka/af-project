import Axios from 'axios';
import { environment } from '../configs/environment';

export function addDelivery(data) {
  Axios.post(environment.baseURL + 'delivery/add', data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

export function updateDelivery(data) {
  console.log(data);
}

export function getDelivery(id) {
  Axios.get(environment.baseURL + 'delivery/get/' + id);
}
