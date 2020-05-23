/* eslint-disable no-console */
import Axios from 'axios';
import HomePage from '../pages/home/HomePage';
import FormData from 'form-data';
import { environment } from '../configs/environment';
// Create new client
// TODO: Need add Client object as a param
export function createNewClient(data, image) {
  const fd = new FormData();
  fd.append('image', image, image.name);
  fd.append('firstName', data.firstName);
  fd.append('lastName', data.lastName);

  for (var key of fd.entries()) {
    console.log('form data : ', key[0], key[1]);
  }

  Axios.post(environment.baseURL + 'client/add', fd, {
    onUploadProgress: (progressEvent) => {
      console.log(
        'Upload Progress : ' +
          Math.round((progressEvent.loaded / progressEvent.total) * 100) +
          '%'
      );
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
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
export function login(data) {
  console.log(data);
  Axios.post(environment.baseURL + 'client/login', data)
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));

  return HomePage;
}
