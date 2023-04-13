import { A11yHidden, Nav } from '@/components/index';
import styled from 'styled-components/macro';
import { useTheme } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { LogoIcon } from '@/assets/LogoIcon';

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  height: 10rem;
  background: #f2e9e4;
  @media (max-width: 768px) {
    padding: 0 5vw;
  }
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
  height: 10rem;
  width: 10rem;
`;

export function Header() {
  const theme = useTheme();
  console.log(theme);
  return (
    <HeaderSection className="header">
      <HeaderLogoLink to={'/'} title="메인페이지">
        <A11yHidden as="h1">I's gallery 홈페이지</A11yHidden>
        <LogoIcon fill={'black'} ariaLabel="HomePage" />
      </HeaderLogoLink>
      <Nav />
    </HeaderSection>
  );
}
