import { Nav } from '@/components/index';
import Logo from '@/assets/Logo.svg';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getPathFromBaseUrl } from '@/utils';

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f2e9e4;
  padding: 0 180px;
  height: 200px;
`;

export function Header() {
  return (
    <HeaderSection>
      <h1>
        <Link to={getPathFromBaseUrl()}>
          <img src={Logo} alt="아이즈 갤러리 로고" />
        </Link>
      </h1>
      <Nav />
    </HeaderSection>
  );
}
