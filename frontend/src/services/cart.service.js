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

export async function getSubTotal(clientId) {
  let items = [];
  const res = await Axios.get(environment.baseURL + 'cart/get/' + clientId);
  items = res.data.items;

  let subTotal = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    subTotal += item.quantity * item.productPrice;
  }

  return subTotal;
}
