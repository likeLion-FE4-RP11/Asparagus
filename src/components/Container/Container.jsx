import styled from 'styled-components';

const config = {
  minWidth: '320px',
  maxWidth: '1560px', // 우리 시안 양쪽 여백이 180px라서 계산해서 다시 넣었습니다.
};

export const Container = styled.div`
  width: clamp(${config.minWidth}, 90vw, ${config.maxWidth});
  margin-left: auto;
  margin-right: auto;
`;

// styled.div
// Container

Container.displayName = 'Container';
