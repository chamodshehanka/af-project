import Axios from 'axios';

export function createCart() {
  Axios.post('')
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}
