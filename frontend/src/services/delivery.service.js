import Axios from 'axios';
import { environment } from '../configs/environment';

export function addDelivery(data) {
  console.log(data);
  // Axios.post(environment.baseURL + 'delivery/add', data)
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.error(err));
}

export function updateDelivery(data) {
  console.log(data);
}

export function getDelivery(id) {
  Axios.get(environment.baseURL + 'delivery/get/' + id);
}

export function subscribeNewsLetter(clientId) {
  Axios.post(environment.baseURL + 'newsletter/add' + clientId);
}
