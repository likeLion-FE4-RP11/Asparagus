import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';

const ImageContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  text-align: left;
`;

export function SeeMoreImg() {
  return (
    <ImageContainer bgColor={getColor('primary')}>
      <h4>테스트</h4>
      <p>테스트1</p>
    </ImageContainer>
  );
}

ImageContainer.displayName = 'ImageContainer';
