import Axios from 'axios';
import dashboard from '../pages/Admin/dashboard';
import { environment } from '../configs/environment';

//login function
/*eslint-disable */
export function login(data, history) {
    Axios.post(environment.baseURL + 'adminLogin/login', data)
      .then((res) => {
        if (res) {
          if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data));
  
            history.push(`/dashboard`);
          }
        }
      })
      .catch((err) => console.error(err));
    }