import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { BaseLayout, Nav, RootLayout } from '@/components';
import { getPathFromBaseUrl } from '@/utils';
import styled from 'styled-components';

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

// function App() {
//   return (
//     <Router>
//       <AppStyle>
//         <BaseLayout>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/categories" element={<CategoriesPage />} />
//             <Route path="/upload" element={<UploadPage />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </BaseLayout>

//         <RootLayout>
//           <Routes>
//             <Route path="/signup" element={<SignUpPage />} />
//             <Route path="/signin" element={<SignInPage />} />
//           </Routes>
//         </RootLayout>
//       </AppStyle>
//     </Router>
//   );
// }

function App() {
  return <RouterProvider router={router} />;
}

export default App;
