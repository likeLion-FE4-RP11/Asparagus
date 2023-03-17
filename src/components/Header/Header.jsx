import { Nav } from '@/components/index'
import Logo from '@/assets/Logo.svg';
import styled from 'styled-components/macro';



const HeaderSection = styled.div`
  background: #f2e9e4;
  padding: 0 180px;
  height: 200px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export function Header() {
  return (
    <HeaderSection>
      <HeaderContainer>
        <h1>
          <a href="/">
            <img src={Logo} alt="아이즈 갤러리 로고" />
          </a>
        </h1>
        <Nav />
      </HeaderContainer>
    </HeaderSection>
  );
}
