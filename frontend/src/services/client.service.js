/* eslint-disable no-console */
import Axios from 'axios';
// import FormData from 'form-data';
import { environment } from '../configs/environment';
// Create new client
// TODO: Need add Client object as a param
export function createNewClient(data) {
  console.log(data);
  // const fd = new FormData();
  // fd.append('image', image, image.name);
  // fd.append('firstName', data.firstName);
  // fd.append('lastName', data.lastName);

  // for (var key of fd.entries()) {
  //   console.log('form data : ', key[0], key[1]);
  // }
  //console.log(image);

  Axios.post(
    environment.baseURL + 'client/add',
    data
    //, {
    // onUploadProgress: (progressEvent) => {
    //   console.log(
    //     'Upload Progress : ' +
    //       Math.round((progressEvent.loaded / progressEvent.total) * 100) +
    //       '%'
    //   );
    // },
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    // }
  )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
}

// Need to impl
export function removeClient(id) {
  console.log(id);
}

// Need to impl
export function updateClient() {}

// Need to impl
export function getClientById(id) {
  console.log(id);
}

// Get all clients
export function getAllClients() {
  var array;

  Axios.get(environment.baseURL + 'client/list')
    .then((e) => {
      console.log(e.data);

      array = e.data;

      return e.data;
    })
    .catch((err) => console.error(err));

  return array;
}

//login function
/*eslint-disable */
export function login(data, history) {
  Axios.post(environment.baseURL + 'client/login', data)
    .then((res) => {
      if (res) {
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data));

          history.push(`/`);
        }
      }
    })
    .catch((err) => console.error(err));
}
//get current user

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

//logout

export function logout() {
  localStorage.removeItem('user');
}
/*eslint-enable */
