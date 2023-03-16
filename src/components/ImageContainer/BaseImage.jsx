import baseSrc from '@/assets/gallery-icon.png';
import { getColor } from '@/theme/utils';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const BaseImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(147, 155, 155);
  border-radius: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};

  img {
    display: block;
  }
`;

// 이미지 로딩 중에 띄울 컴포넌트
export function BaseImage({ width, height }) {
  return (
    <BaseImageBox width={width} height={height} bgColor={getColor('gray/100')}>
      <img src={baseSrc} alt="기본 이미지" />
    </BaseImageBox>
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
