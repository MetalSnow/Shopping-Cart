import App from '../App';
import Shop from '../components/shop/Shop';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
];

export default routes;
