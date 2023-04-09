import { Nav } from '@/components/index';
import styled from 'styled-components/macro';
import { useTheme } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import LogoIcon from '@/assets/LogoIcon';

const HeaderSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 180px;
  height: 200px;
  background: #f2e9e4;
`;

export function Header() {
  const theme = useTheme();

  return (
    <HeaderSection className="header">
      <h1>
        <Link to={'/'}>
          <LogoIcon fill={'black'} />
        </Link>
      </h1>
      <Nav />
    </HeaderSection>
  );
}
