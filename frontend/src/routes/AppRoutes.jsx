import HomePage from '../pages/home/HomePage';
import CartPage from '../pages/Cart/CartPage';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import ClientPage from '../pages/Client/ClientPage';
import ClientAccount from '../pages/Client/ClientAccount';
import Dashboard from '../pages/Admin/dashboard';
import DeliveryPage from '../pages/Delivery/DeliveryPage';
import StoreManagerDetails from '../pages/Admin/StoreManagerDetails';
import Category from '../pages/Admin/Category';
import WishList from '../pages/WishList/WishList';
import ShopPage from '../pages/Shop/Shop';
import ProductView from '../pages/ProductView/ProductView';
import AdminLogin from '../pages/AdminLogin/AdminLogin';

export const routes = [
  { path: '/', component: HomePage },
  { path: '/signUp', component: SignUp },
  { path: '/signIn', component: SignIn },
  { path: '/cart', component: CartPage },
  { path: '/clients', component: ClientPage },
  { path: '/clientAccount', component: ClientAccount },
  { path: '/dashboard', component: Dashboard },
  { path: '/storeManagerDetails', component: StoreManagerDetails },
  { path: '/wishList', component: WishList },
  { path: '/category', component: Category },
  { path: '/delivery', component: DeliveryPage },
  { path: '/shop', component: ShopPage },
  { path: '/productView', component: ProductView },
  { path: '/adminLogin', component: AdminLogin },
];
