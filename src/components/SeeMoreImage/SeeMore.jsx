import styled from 'styled-components/macro';

const ImageContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #eee;
  text-align: left;
`;

export function SeeMoreImg() {
  return (
    <ImageContainer>
      <h4>테스트</h4>
      <p>테스트1</p>
    </ImageContainer>
  );
}

ImageContainer.displayName = 'ImageContainer';
