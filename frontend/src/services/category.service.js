import Axios from 'axios';

export function addCategory(data, image) {
   
    Axios.post('http://localhost:4000/api/category/add', data)
    .then((res) => {
      console.log(res);
      console.log(res.data);
    })
    .catch((err) => console.error(err));
  }