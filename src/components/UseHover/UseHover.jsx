import { useCallback, useState, useEffect } from 'react';
import { ImageContainer } from '@/components/index';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export function UseHover(props) {
  return (
    <HoverContainer>
      <motion.div
        style={{
          width: 300,
          height: 300,
          margin: 0,
          background: '#666',
          borderRadius: 5,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...props}
      >
        <HoverScript>아래에 글자가 나오나요?</HoverScript>
      </motion.div>
      <ImageContainer />
    </HoverContainer>
  );
}

const HoverScript = styled.p`
  font-size: 100px;
  font-weight: 700;
`;

const HoverContainer = styled.div`
  position: relative;
`;
