import Axios from 'axios';
import FormData from 'form-data';

export function addStoreManager(data) {
  const SM = new FormData();
  
  SM.append('name', data.name);
  SM.append('email', data.email);
  SM.append('contactNo', data.contactNo);
  SM.append('password', data.password);

  for (var key of SM.entries()) {
    console.log('form data : ', key[0], key[1]);
  }

  Axios.post('http://localhost:4000/api/storeManager/add', SM)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}



//get all store managers list
  export function getStoreManager() {
    
  
    // var array;
  
    // Axios.get('http://localhost:4000/api/storeManager/list')
    //   .then((e) => {
    //     console.log(e.data);
  
    //     array = e.data;
  
    //     return e.data;
    //   })
    //   .catch((err) => console.error(err));
  
    // return array;
  }
