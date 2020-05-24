import Axios from 'axios';

export function createNewProduct(data) {
  Axios.post('http://localhost:4000/api/product/add', data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

export function editProduct(data) {
    Axios.post('http://localhost:4000/api/product/update', data)
        .then((res) => {
            console.log(res);
            console.log(res.data);
          })
          .catch((err) => console.error(err));
}

export function deleteProduct(data) {
    Axios.delete('http://localhost:4000/api/product/delete', data)
         .then((res) => {
             console.log(res);
         })
         .catch((err) => console.log(err));
}

export function getProductById(data) {
    Axios.get('http://localhost:4000/api/product/get', data)
        .then((res) => {
            console.log(res);
 
        })
        .catch((err) => console.log(err));

}

export function getAllProducts() {
    var array;
  
    Axios.get('http://localhost:4000/api/product/list')
      .then((e) => {
        console.log(e.data);
  
        array = e.data;
  
        return e.data;
      })
      .catch((err) => console.error(err));
  
    return array;
  }