import testImg from '@/assets/test.jpg';
import Styles from './ImageContainer.module.css';
import PropTypes from 'prop-types';

export function ImageContainer({ src, alt, width, height }) {
  return (
    <div
      className={Styles.SrcImageBox}
      style={{
        width: width,
        height: height,
      }}
    >
      <img src={src} alt={alt}></img>
    </div>
  );
}

ImageContainer.defaultProps = {
  src: testImg,
  alt: '테스트 이미지',
  width: '1097px',
  height: '633px',
};

ImageContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
