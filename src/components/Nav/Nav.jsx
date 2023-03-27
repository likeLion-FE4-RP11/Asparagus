import * as S from './Nav.styled';
import { NavLink } from 'react-router-dom';
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
            <S.NavListAncor to="/upload">Upload</S.NavListAncor>
          </li>
          {authUser ? (
            <>
              <li>
                <S.NavListAncor to="/">
                  <S.NavButton onClick={handleSignOut}>Logout</S.NavButton>
                </S.NavListAncor>
              </li>
              <li>
                <S.NavListAncor to="/">{authUser.name}님</S.NavListAncor>
              </li>
            </>
          ) : (
            <>
              <li>
                <S.NavListAncor to="/signin">Login</S.NavListAncor>
              </li>
              <li>
                <S.NavListAncor to="/signup">Sign Up</S.NavListAncor>
              </li>
            </>
          )}
        </S.NavList>
      </S.NavContainer>
    </>
  );
}
