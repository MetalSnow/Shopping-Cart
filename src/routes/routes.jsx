import App from '../App';
import Shop from '../components/shop/Shop';
import ErrorPage from '../error/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'shop/:name?',
    element: <Shop />,
  },
];

export default routes;
