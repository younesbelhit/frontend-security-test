import { createBrowserRouter } from 'react-router-dom';
// protected routes
import Protected from '../components/protected';
// pages
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import ProfilePage from '../pages/profile';
import ErrorPage from '../pages/error';
import Layout from '../pages/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <Layout />
      </Protected>
    ),
    children: [
      {
        path: '/',
        element: <ProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);

export default router;
