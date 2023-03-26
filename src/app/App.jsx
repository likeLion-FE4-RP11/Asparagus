import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BaseLayout, RootLayout } from '@/components';

/* Pages -------------------------------------------------------------------- */
import HomePage from '@/pages/Home/HomePage';
import SignInPage from '@/pages/SignIn/SignInPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import CategoriesPage from '@/pages/Categories/CategoriesPage';
import UploadPage from '@/pages/UploadPage/UploadPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: (
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        ),
      },
      {
        path: 'Upload',
        element: (
          <BaseLayout>
            <UploadPage />
          </BaseLayout>
        ),
      },
      {
        path: 'Categories',
        element: (
          <BaseLayout>
            <CategoriesPage />
          </BaseLayout>
        ),
      },
    ],
  },
  {
    path: '/SignIn',
    element: <RootLayout />,
    children: [{ index: true, element: <SignInPage /> }],
  },
  {
    path: '/SignUp',
    element: <RootLayout />,
    children: [{ index: true, element: <SignUpPage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
