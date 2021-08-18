import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Details from '../pages/Details/Details';
import NotFound from '../pages/NotFound/NotFound';

export const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/details/:id', Component: Details },
  { path: '/404', Component: NotFound },
];
