import testImg from '@/assets/test.svg';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { BaseImage } from '@/components/ImageContainer/BaseImage';

const SrcImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  max-width: 100%;
  height: 100%;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export function ImageContainer({ src, alt, width, height }) {
  return (
    <SrcImageBox width={width} height={height}>
      {src ? (
        <img src={src} alt={alt}></img>
      ) : (
        <BaseImage width={width} height={height} />
      )}
    </SrcImageBox>
  );
}

ImageContainer.defaultProps = {
  src: testImg,

ImageContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
