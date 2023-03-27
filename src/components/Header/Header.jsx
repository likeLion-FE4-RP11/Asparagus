import { Nav } from '@/components/index';
import Logo from '@/assets/Logo.svg';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getPathFromBaseUrl } from '@/utils';
import { useAuthUser } from '@/contexts/AuthUser';
import { useSignOut } from '@/firebase/auth';

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2e9e4;
  padding: 0 180px;
  height: 200px;
`;

export function Header() {
  const { authUser, updateAuthUser } = useAuthUser();

  const { signOut } = useSignOut();

  const handleSignOut = () => {
    console.log('로그아웃');
    signOut();
    updateAuthUser(null);
  };

  console.log('', authUser);
  return (
    <HeaderSection>
      <h1>
        <Link to={getPathFromBaseUrl()}>
          <img src={Logo} alt="아이즈 갤러리 로고" />
        </Link>
      </h1>
      {authUser ? (
        <div>
          <h2>인증 사용자 페이지</h2>
          <div>
            <ul>
              <li>{authUser.displayName}</li>
              <li>{authUser.email}</li>
            </ul>
            <button onClick={handleSignOut}>로그아웃</button>
          </div>
        </div>
      ) : null}
      <Nav />
    </HeaderSection>
  );
}
