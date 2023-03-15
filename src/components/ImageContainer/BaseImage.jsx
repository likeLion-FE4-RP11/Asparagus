import baseSrc from '@/assets/gallery-icon.png';
import Styles from './ImageContainer.module.css';
import { getColor } from '@/theme/utils';
import PropTypes from 'prop-types';

// 이미지 로딩 중에 띄울 컴포넌트
export function BaseImage({ width, height }) {
  return (
    <div
      className={Styles.BaseImage}
      style={{
        width: width,
        height: height,
        backgroundColor: getColor('gray/100'),
      }}
    >
      <img src={baseSrc} alt="기본 이미지" />
    </div>
  );
}

BaseImage.defaultProps = {
  width: '1097px',
  height: '633px',
};

BaseImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
