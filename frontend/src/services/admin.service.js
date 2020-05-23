import Axios from 'axios';

export function addStoreManager(data) {

  Axios.post('http://localhost:4000/api/storeManager/add', data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => console.error(err));
}
