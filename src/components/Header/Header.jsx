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
  // 지금은 페이지에서만 관리되고 있음. 전역상태관리가 필요.
  // 1. 사이드이펙트 처리 -> useEffect를 사용해서 테마정보를 가져와야 한다.
  // 2. 테마를 글로벌 스테이트로 옮기는 것
  console.log(theme);
  return (
    <HeaderSection className="header">
      <h1>
        <Link to={'/'}>
          <LogoIcon fill={'white'} />
        </Link>
      </h1>
      <Nav />
    </HeaderSection>
  );
}
