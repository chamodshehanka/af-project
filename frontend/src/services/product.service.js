import Axios from 'axios';
import { environment } from '../configs/environment';

export function createNewProduct(data) {
  Axios.post(environment.baseURL + 'product/add', data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

export function editProduct(data) {
    Axios.post(environment.baseURL + 'product/update', data)
        .then((res) => {
            console.log(res);
            console.log(res.data);
          })
          .catch((err) => console.error(err));
}

export function deleteProduct(data) {
    Axios.delete(environment.baseURL + 'product/delete', data)
         .then((res) => {
             console.log(res);
         })
         .catch((err) => console.log(err));
}

export function getProductById(data) {
    Axios.get(environment.baseURL + 'product/get', data)
        .then((res) => {
            console.log(res);
 
        })
        .catch((err) => console.log(err));

}

export function getAllProducts() {
    var array;
  
    Axios.get(environment.baseURL + 'product/list')
      .then((e) => {
        console.log(e.data);
  
        array = e.data;
  
        return e.data;
      })
      .catch((err) => console.error(err));
  
    return array;
  }