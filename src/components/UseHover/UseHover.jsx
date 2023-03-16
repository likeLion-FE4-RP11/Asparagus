import { useCallback, useState, useEffect } from 'react';
import { ImageContainer } from '@/components/ImageContainer/ImageContainer';
import styled, { keyframes } from 'styled-components/macro';

export function UseHover() {
  const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {}, [isHovering]);

  const handleMouseOver = useCallback(() => {
    setIsHovering(true);
    console.log('호버');
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    console.log('호버 해제');
  }, []);

  return (
    <HoverWarpper onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <ImageContainer width="300px" height="300px" />
    </HoverWarpper>
  );
}

const rotate = keyframes` 
0%{
    transform: rotate(0deg);
    border-radius: 0px;
}
50%{ 
    border-radius: 100px;
}
100%{
    transform: rotate(350deg);
    border-radius: 0px;
}
`;

const HoverWarpper = styled.div`
  background-color: aqua;
  width: 300px;
  transition: all 1s;

  &::before {
    content: '';
  }
`;
