import { Nav } from '@/components/index';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { getPathFromBaseUrl } from '@/utils';
import Logo from '@/assets/Logo.svg';

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 180px;
  height: 200px;
  background: #f2e9e4;
`;

export function Header() {
  return (
    <HeaderSection className="header">
      <h1>
        <Link to={getPathFromBaseUrl()}>
          <img src={Logo} alt="아이즈 갤러리 로고" />
        </Link>
      </h1>
      <Nav />
    </HeaderSection>
  );
}
