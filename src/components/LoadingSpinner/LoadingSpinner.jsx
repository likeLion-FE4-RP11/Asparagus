import React from 'react';
import styled from 'styled-components';
import Spinner from '@/assets/LoadingSpinnerGif.gif';

const Container = styled.div`
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

const LoadingText = styled.span`
  text-align: center;
  font-size: medium;
  font-weight: 600;
`;

const LoadingImage = styled.img`
  display: block;
  width: 200px;
  height: 200px;
`;

export function LoadingSpinner() {
  return (
    <Container>
      <LoadingImage src={Spinner} alt="로딩중" />
      <LoadingText>Loading...😃</LoadingText>
    </Container>
  );
}
