import Home from '../components/home/home';
import About from '../components/about/about';
import Details from '../components/details/details';
import NotFound from '../components/not-found/not-found';

export const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/details/:id', Component: Details },
  { path: '/404', Component: NotFound },
];
