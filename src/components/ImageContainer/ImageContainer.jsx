import testImg from '@/assets/test.jpg';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const SrcImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
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
      <img src={src} alt={alt}></img>
    </SrcImageBox>
  );
}

ImageContainer.defaultProps = {
  src: testImg,
  alt: '테스트 이미지',
};

ImageContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
