/* eslint-disable no-console */
import Axios from 'axios';
import HomePage from '../pages/home/HomePage';
import FormData from 'form-data';
// Create new client
// TODO: Need add Client object as a param
export function createNewClient(data, image) {
  console.log(image);
  const fd = new FormData();
  fd.append('image', 'chamod');
  // fd.append('firstName', data.firstName);

  console.log(fd);

  Axios.post(
    'http://localhost:4000/api/client/add',
    {
      firstName: data.firstName,
      lastName: data.lastName,
      image: fd,
    },
    {
      onUploadProgress: (progressEvent) => {
        console.log(
          'Upload Progress : ' +
            Math.round((progressEvent.loaded / progressEvent.total) * 100) +
            '%'
        );
      },
    }
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

  Axios.get('http://localhost:4000/api/client/list')
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
  Axios.post('http://localhost:4000/api/client/login', data)
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));

  return HomePage;
}
