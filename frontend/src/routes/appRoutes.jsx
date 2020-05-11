import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/cart/CartPage';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import ClientPage from '../pages/Client/ClientPage';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/signUp', component: SignUp },
  { path: '/signIn', component: SignIn },
  { path: '/cart', component: CartPage },
  { path: '/clients', component: ClientPage },
];
