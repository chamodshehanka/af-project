import Axios from 'axios';

export function createNewClient() {
  Axios.post('http://localhost:4000/api/client/add')
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));
}

export function removeClient(id) {}

export function updateClient() {}

export function getClientById(id) {}

export function getAllClients() {
  Axios.get('http://localhost:4000/api/client/list')
    .then((e) => {
      console.log(e.data);
    })
    .catch((err) => console.error(err));

  return 'clients innawa';
}
