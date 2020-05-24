/* eslint-disable no-console */
import Axios from 'axios';
import { environment } from '../configs/environment';
import Swal from 'sweetalert2';

// Create new client
export function createNewClient(data, url, history) {
  function generateId() {
    var num = Math.floor(Math.random() * 90000) + 10000;
    return 'CL' + num;
  }
  const reqData = {
    clientId: generateId(),
    name: data.firstName + ' ' + data.lastName,
    email: data.email,
    contactNo: data.contactNo,
    password: data.password,
    profileImage: url,
  };

  Axios.post(environment.baseURL + 'client/add', reqData)
    .then(() => {
      Swal.fire('Good job!', 'Welcome To MalBay!', 'success');
      history.push(`/signIn`);
    })
    .catch((err) => {
      console.error(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    });
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
          alert('Success');
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
