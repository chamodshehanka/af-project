import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import ClientPage from '../pages/Client/ClientPage';
import ClientAccount from '../pages/Client/ClientAccount';
import Dashboard from '../pages/Admin/Dashboard';
import StoreManagerDetails from '../pages/Admin/StoreManagerDetails';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/signUp', component: SignUp },
  { path: '/signIn', component: SignIn },
  { path: '/cart', component: CartPage },
  { path: '/clients', component: ClientPage },
  { path: '/clientAccount', component: ClientAccount },
  { path: '/dashboard', component: Dashboard },
  { path: '/StoreManagerDetails', component: StoreManagerDetails },
];
