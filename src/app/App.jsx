
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BaseLayout, Nav } from '@/components';
import { getPathFromBaseUrl } from '@/utils';
import styled from 'styled-components';


/* Pages -------------------------------------------------------------------- */
import HomePage from '@/pages/Home/HomePage';
import SignInPage from '@/pages/SignIn/SignInPage';
import SignUpPage from '@/pages/SignUp/SignUpPage';
import CategoriesPage from '@/pages/Categories/CategoriesPage';
import UploadPage from '@/pages/UploadPage/UploadPage';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

const AppStyle = styled.div`
  display: block;
`;

function App() {
  return (
    <Router>
      <AppStyle>
        {/* <Nav>
          <Link to={getPathFromBaseUrl()}>홈페이지</Link>
        </Nav> */}
        <BaseLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BaseLayout>
      </AppStyle>
    </Router>

  );
}

export default App;
