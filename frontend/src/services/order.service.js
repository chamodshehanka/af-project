import Axios from 'axios';
import { environment } from '../configs/environment';

export function createOrder(clientId, data, total, paymentMethod) {
  const order = {
    clientId: clientId,
    paymentMethod: paymentMethod,
    totalPrice: total,
    deliveryDetails: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      company: data.company,
      address: data.address,
      apartment: data.apartment,
      city: data.city,
      postalCode: data.postalCode,
      phoneNumber: data.phoneNumber,
    },
  };

  Axios.post(environment.baseURL + 'order/add', order)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.error(err));
}
