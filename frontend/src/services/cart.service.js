import Axios from 'axios';
import { environment } from '../configs/environment';

export function createCart() {
  Axios.post(environment.baseURL)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

export function deleteCartItem(clientId, productId) {
  Axios.delete(
    environment.baseURL + 'cart/delete/' + clientId + '?productId=' + productId,
    {
      clientId: clientId,
      productId: productId,
    }
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

export function updateCartItem(clientId, productId, value) {
  Axios.put(environment.baseURL + 'cart/update', {
    clientId: clientId,
    productId: productId,
    value: value,
  })
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
