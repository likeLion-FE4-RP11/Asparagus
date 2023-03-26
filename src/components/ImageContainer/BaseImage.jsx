import baseSrc from '@/assets/gallery-icon.png';
import { getColor } from '@/theme/utils';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const BaseImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgb(147, 155, 155); */
  border-radius: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  object-fit: cover;
  width: 100%;

  img {
    display: block;
    object-fit: cover;
    width: 29.4375rem;
    height: 37.5rem;
    border-radius: 20px;
  }
`;

// 이미지 로딩 중에 띄울 컴포넌트
export function BaseImage({ width, height, img }) {
  return (
    <BaseImageBox width={width} height={height} bgColor={getColor('gray/100')}>
        <img src={img} alt="기본" />
    </BaseImageBox>
  );
}

BaseImage.defaultProps = {
  width: '68.5625rem',
  height: '39.5625rem',
};

BaseImage.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
