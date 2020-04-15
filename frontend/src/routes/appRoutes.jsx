import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/cart/CartPage';

export const routes = [
  { path: '/', component: HomePage },
  {
    path: '/cart',
    component: CartPage,
  },
];
