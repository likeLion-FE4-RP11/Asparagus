import topButtonIcon from '@/assets/topbutton-icon.svg';
import Styles from './TopButton.module.css';
import { getColor } from '@/theme/utils';
import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

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
        <button
          ref={topButton}
          type="button"
          className={Styles.TopButton}
          style={{ backgroundColor: getColor('secondary') }}
          onClick={scrollToTop}
        >
          <img src={topButtonIcon} alt="페이지 상단으로 이동" />
          Top
        </button>
      )}
    </>
  );
}
