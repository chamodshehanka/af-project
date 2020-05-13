import Axios from 'axios';

// Create new client
// TODO: Need add Client object as a param
export function createNewClient() {
  Axios.post('http://localhost:4000/api/client/add')
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));
}

// Need to impl
export function removeClient(id) {}

// Need to impl
export function updateClient() {}

// Need to impl
export function getClientById(id) {}

// Get all clients
export function getAllClients() {
  Axios.get('http://localhost:4000/api/client/list')
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));

  return 'clientsla innawa';
}
