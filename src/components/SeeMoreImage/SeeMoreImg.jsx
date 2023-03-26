import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';
import { BaseImage } from '@/components';
import PropTypes from 'prop-types';


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

export function SeeMoreImg({ src }) {

 
  return (
    <ImageContainer width="29.4375rem" height="37.5rem">
        <BaseImage img={src}/>
    </ImageContainer>
  );
}

ImageContainer.displayName = 'ImageContainer';


SeeMoreImg.propTypes = {
  src: PropTypes.string,
  };