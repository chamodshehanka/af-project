import Axios from 'axios';

//get all store managers list
export function getStoreManager() {
  var array;

  Axios.get('http://localhost:4000/api/storeManager/list')
    .then((e) => {
      console.log(e.data);

      array = e.data;

      return e.data;
    })
    .catch((err) => console.error(err));

  return array;
}
