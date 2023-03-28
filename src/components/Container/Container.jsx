import styled from 'styled-components/macro';

const config = {
  minWidth: '320px',
  maxWidth: '1560px',
};

export const Container = styled.div`
  width: clamp(${config.minWidth}, 90vw, ${config.maxWidth});
  margin-left: auto;
  margin-right: auto;
`;

Container.displayName = 'Container';
