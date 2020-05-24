import Axios from 'axios';
import dashboard from '../pages/Admin/dashboard';
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

//login function
export function login(data) {
  console.log(data);
  Axios.post(environment.baseURL + 'storeManager/login', data)
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));

  return dashboard;
}
