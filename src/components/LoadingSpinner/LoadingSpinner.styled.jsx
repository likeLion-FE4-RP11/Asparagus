import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LoadingText = styled.span`
  text-align: center;
  font-size: medium;
  font-weight: 600;
`;

export const LoadingImage = styled.img`
  display: block;
  width: 200px;
  height: 200px;
`;
