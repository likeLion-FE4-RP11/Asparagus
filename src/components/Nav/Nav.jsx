import * as S from './Nav.styled';
import { A11yHidden } from '@/components/index';
import { useAuthUser } from '@/contexts/AuthUser';
import { useSignOut } from '@/firebase/auth';

export function Nav() {
  const { authUser, updateAuthUser } = useAuthUser();
  const { signOut } = useSignOut();

  const handleSignOut = () => {
    console.log('로그아웃');
    signOut();
    updateAuthUser(null);
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
                <S.NavListAncor className="nav-2" to="/">
                  <S.NavButton className="nav-3" onClick={handleSignOut}>
                    Logout
                  </S.NavButton>
                </S.NavListAncor>
              </li>
              <li>
                <S.NavListAncor className="nav-4" to="/">
                  {authUser.name}님
                </S.NavListAncor>
              </li>
            </>
          ) : (
            <>
              <li>
                <S.NavListAncor className="nav-5" to="/signin">
                  Login
                </S.NavListAncor>
              </li>
              <li>
                <S.NavListAncor className="nav-6" to="/signup">
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
