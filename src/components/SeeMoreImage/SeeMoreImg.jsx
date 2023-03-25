import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';
import { BaseImage } from '@/components';


const ImageContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  text-align: left;
  z-index: 1;
  width: 29.4375rem;
  height: 37.5rem;
  margin-right: 71px;
`;

export function SeeMoreImg({ img }) {

 
  return (
    <ImageContainer>
        <BaseImage width="29.4375rem" height="37.5rem" img={img}/>
    </ImageContainer>
  );
}

ImageContainer.displayName = 'ImageContainer';
