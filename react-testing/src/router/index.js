import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Details from '../pages/Details/Details';
import NotFound from '../pages/NotFound/NotFound';

export const routes = [
  { path: '/home', Component: Home, exact: true },
  { path: '/about', Component: About, exact: true },
  { path: '/details/:id', Component: Details, exact: true },
  { path: '*', Component: NotFound, exact: false },
];
