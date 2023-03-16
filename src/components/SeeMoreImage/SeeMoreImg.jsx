import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';
import { BaseImage } from '@/components';

const ImageContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  text-align: left;
`;

export function SeeMoreImg() {
  return (
    <ImageContainer bgColor={getColor('primary')}>
      <BaseImage />
    </ImageContainer>
  );
}

ImageContainer.displayName = 'ImageContainer';
