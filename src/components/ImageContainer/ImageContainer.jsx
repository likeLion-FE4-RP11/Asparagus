import testImg from '@/assets/test.png';
import classes from './ImageContainer.module.css';
import { BaseImage } from './BaseImage';
import PropTypes from 'prop-types';

export function ImageContainer({ isLoading, src, alt, width, height }) {
  return (
    <section>
      {isLoading ? (
        <BaseImage width={width} height={height} />
      ) : (
        <div
          className={classes.srcImageBox}
          style={{
            width: width,
            height: height,
          }}
        >
          <img src={src} alt={alt}></img>
        </div>
      )}
    </section>
  );
}

ImageContainer.defaultProps = {
  isLoading: true,
  src: testImg,
  alt: '테스트 이미지',
  width: '1097px',
  height: '633px',
};

ImageContainer.propTypes = {
  isLoading: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
