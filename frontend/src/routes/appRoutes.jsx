import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/cart/CartPage';
import SignUp from '../pages/SignUp/SignUp';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/signUp', component: SignUp },
  { path: '/cart', component: CartPage },
];
