import Axios from 'axios';
// import { environment } from '../configs/environment';

export function createCart() {
  Axios.post('')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

export function getCart(clientId) {
  console.log(clientId);
  // let data = 'hi';
  // Axios.get(environment.baseURL + 'cart/get/' + clientId)
  //   .then((cartData) => {
  //     // console.log(cartData);

  //     // data = cartData;
  //   })
  //   .catch((err) => console.error(err));

  // return data;
}
