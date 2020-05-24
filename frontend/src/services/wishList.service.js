import Axios from 'axios';
import { environment } from '../configs/environment';
import Swal from 'sweetalert2';

// Get Wish List Items
export function getWishListItems(clientId) {
  var array = [];

  Axios.get(environment.baseURL + 'wishList/get/' + clientId)
    .then((e) => {
      array = e.data.items;
      console.log(array);
      return array;
    })
    .catch((err) => console.error(err));
  return array;
}

// Add to Wish List Items
export function addToWishList(clientId, productId, history) {
  const data = {
    clientId: clientId,
    productId: productId,
  };
  Axios.post(environment.baseURL + 'wishList/add', data)
    .then(() => {
      Swal.fire({
        title: 'Successfully Added',
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go To Wish List',
      }).then((result) => {
        if (result.value) {
          history.push(`/wishList`);
        }
      });
    })
    .catch((err) => console.error(err));
}
