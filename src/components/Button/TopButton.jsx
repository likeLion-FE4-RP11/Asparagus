import topButtonIcon from '@/assets/topbutton-icon.svg';
import { getColor } from '@/theme/utils';
import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import styled from 'styled-components/macro';

const Button = styled.button`
  width: 111px;
  height: 111px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 7.73px;
  border-radius: 50%;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  position: fixed;
  bottom: 82px;
  right: 74px;
  z-index: 10;
`;

export function TopButton() {
  const [showButton, setShowButton] = useState(false);
  const topButton = useRef();

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
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (showButton) {
        gsap.from(topButton.current, { y: 50, opacity: 0, duration: 0.5 });
      }
    }, topButton);

    return () => ctx.revert(); // cleanup
  }, [showButton]);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <Button
          ref={topButton}
          type="button"
          bgColor={getColor('secondary')}
          onClick={scrollToTop}
        >
          <img src={topButtonIcon} alt="페이지 상단으로 이동" />
          Top
        </Button>
      )}
    </>
  );
}
