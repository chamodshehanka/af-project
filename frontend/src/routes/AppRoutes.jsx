import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import ClientPage from '../pages/Client/ClientPage';
import ClientAccount from '../pages/Client/ClientAccount';
import Dashboard from '../pages/Admin/dashboard';
import DeliveryPage from '../pages/Delivery/DeliveryPage';
import StoreManagerDetails from '../pages/Admin/StoreManagerDetails';
import WishList from '../pages/WishList/WishList';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/signUp', component: SignUp },
  { path: '/signIn', component: SignIn },
  { path: '/cart', component: CartPage },
  { path: '/clients', component: ClientPage },
  { path: '/clientAccount', component: ClientAccount },
  { path: '/dashboard', component: Dashboard },
  { path: '/delivery', component: DeliveryPage },
  { path: '/StoreManagerDetails', component: StoreManagerDetails },
  { path: '/wishList', component: WishList },
];
