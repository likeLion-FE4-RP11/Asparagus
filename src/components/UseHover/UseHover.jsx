import { useCallback, useState, useEffect } from 'react';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

export function UseHover(props) {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        margin: 0,
        background: '#666',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...props}
    >
      <p>아래에 글자가 나오나요?</p>
    </motion.div>
  );
}

const HoverScript = styled.p`
  font-size: 100px;
  font-weight: 700;
`;
