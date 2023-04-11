import * as S from './Nav.styled';
import { A11yHidden } from '@/components/index';
import { useAuthUser } from '@/contexts/AuthUser';
import { useSignOut } from '@/firebase/auth';
import { useNavigate } from 'react-router-dom';

export function Nav() {
  const { authUser, updateAuthUser } = useAuthUser();
  const { signOut } = useSignOut();
  const navigate = useNavigate();

  const handleSignOut = () => {
    console.log('로그아웃');
    signOut();
    updateAuthUser(null);
    navigate('/');
  };

  return (
    <>
      <S.NavContainer>
        <A11yHidden as="h2">메인 메뉴</A11yHidden>
        <S.NavList>
          <li>
            <S.NavListAncor className="nav-1" to="/upload">
              Upload
            </S.NavListAncor>
          </li>
          {authUser ? (
            <>
              <li>
                <S.NavButton className="nav-2" onClick={handleSignOut}>
                  Logout
                </S.NavButton>
              </li>
              <li>
                <S.NavListAncor className="nav-3" to="/">
                  {authUser.name}님
                </S.NavListAncor>
              </li>
            </>
          ) : (
            <>
              <li>
                <S.NavListAncor className="nav-4" to="/signin">
                  Login
                </S.NavListAncor>
              </li>
              <li>
                <S.NavListAncor className="nav-5" to="/signup">
                  Sign Up
                </S.NavListAncor>
              </li>
            </>
          )}
        </S.NavList>
      </S.NavContainer>
    </>
  );
}
