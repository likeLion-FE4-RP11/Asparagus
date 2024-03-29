import topButtonIcon from '@/assets/topbutton-icon.svg';
import { getColor } from '@/theme/utils';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components/macro';

const Button = styled(motion.button)`
  width: 64px;
  height: 64px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 50%;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  position: fixed;
  bottom: 82px;
  right: 74px;
  z-index: 10;
  img {
    width: 18px;
    height: 16px;
  }
`;

export function TopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleTopButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleTopButton);
    return () => {
      window.removeEventListener('scroll', handleTopButton);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <Button
          type="button"
          bgColor={getColor('secondary')}
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img src={topButtonIcon} alt="페이지 상단으로 이동" />
          Top
        </Button>
      )}
    </AnimatePresence>
  );
}
