import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Explore from '../pages/explore';
import Notifications from '../pages/notifications';
import Messages from '../pages/messages';
import MainLayout from '../layouts/main';
import Lists from '../pages/lists';
import Bookmarks from '../pages/bookmarks';
import Profile from '../pages/profile';
import Jobs from '../pages/jobs';
import Communities from '../pages/communities';
import Premium from '../pages/premium';
import Verified from '../pages/verified-orgs';
import NotFound from '../pages/not-found';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'explore',
        element: <Explore />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'messages',
        element: <Messages />,
      },
      {
        path: 'lists',
        element: <Lists />,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
      },
      // {
      //   path: 'jobs',
      //   element: <Jobs />,
      // },
      // {
      //   path: 'communities',
      //   element: <Communities />,
      // },
      // {
      //   path: 'premium',
      //   element: <Premium />,
      // },
      // {
      //   path: 'verified-orgs',
      //   element: <Verified />,
      // },
      {
        path: ':profile',
        element: <Profile />,
      },
      {
        path: ':slug',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
