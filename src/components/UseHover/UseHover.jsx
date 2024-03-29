import { ImageContainer } from '@/components/index';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { DeleteButton } from '@/components';
import { useState } from 'react';
import { deleteImageItem } from '@/utils/categoryUtils';

export function UseHover({
  width,
  height,
  description,
  src,
  datasetKey,
  ...props
}) {
  const [visible, setVisible] = useState(false);

  const DeleteButtonStyle = {
    position: 'absolute',
    zIndex: 1000,
    right: 20,
    top: 10,
  };

  const handleDeleteImgData = () => {
    deleteImageItem(datasetKey);
  };

  return (
    <HoverContainer
      width={width}
      height={height}
      onClick={() => {
        setVisible(!visible);
      }}
    >
      <motion.div
        variants={Variants}
        initial="begin"
        whileHover="hovering"
        transition
        style={{
          width: '100%',
          height: '100%',
          margin: 0,
          background: '#17202a',
          borderRadius: 20,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...props}
      >
        <HoverScript>{description}</HoverScript>
      </motion.div>
      <ImageContainer width={width} height={height} src={src}></ImageContainer>
      {visible && (
        <DeleteButton onClick={handleDeleteImgData} style={DeleteButtonStyle} />
      )}
    </HoverContainer>
  );
}

const HoverContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 20px;
  cursor: pointer;
`;

const HoverScript = styled.p`
  word-wrap: break-word;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
  padding: 15px;
`;

// variants 적용
export const Variants = {
  begin: {
    opacity: 0,
  },
  hovering: {
    width: '100%',
    opacity: 0.8,
  },
};

UseHover.defaultProps = {
  width: '100px',
  height: '100px',
  description: '이곳은 설명부분 입니다.',
};

UseHover.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
  datasetKey: PropTypes.string,
};
