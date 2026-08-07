import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Exam from '../pages/Exam';
import Result from '../pages/Result';
import Review from '../pages/Review';
import Statistics from '../pages/Statistics';
import Bookmarks from '../pages/Bookmarks';
import Settings from '../pages/Settings';
import About from '../pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/exam',
    element: <Exam />,
  },
  {
    path: '/result',
    element: <Result />,
  },
  {
    path: '/review',
    element: <Review />,
  },
  {
    path: '/statistics',
    element: <Statistics />,
  },
  {
    path: '/bookmarks',
    element: <Bookmarks />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/result',
    element: <Result />,
  },
]);

export default router;
