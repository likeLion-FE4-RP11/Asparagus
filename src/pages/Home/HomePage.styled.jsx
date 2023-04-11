import styled from 'styled-components/macro';

export const CategoryContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

export const CategoryStyle = styled.div`
  all: none;
  background: #f2e9e4;
  position: absolute;
  top: 0;
  /* width: 100%; */
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 80%;
  z-index: -1;
`;

export const MainSection = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const SeeMoreSection = styled.section`
  display: flex;
  padding: 100px 0;
  justify-content: space-between;
  gap: 20px;
`;
