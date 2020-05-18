/* eslint-disable no-console */
import Axios from 'axios';
import HomePage from '../pages/home/HomePage';
// Create new client
// TODO: Need add Client object as a param
export function createNewClient(data) {
  Axios.post('http://localhost:4000/api/client/add', data)
    .then((e) => {
      console.log(e.data);
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
