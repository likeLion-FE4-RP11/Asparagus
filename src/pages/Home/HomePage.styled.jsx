import styled from 'styled-components/macro';

export const CategoryContainer = styled.div`
  position: relative;
`;

export const CategoryStyle = styled.div`
  background: #f2e9e4;
  position: absolute;
  top: -5%;
  width: 100%;
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
