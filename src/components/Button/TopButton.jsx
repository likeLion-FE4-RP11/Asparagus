import topButtonIcon from '@/assets/topbutton-icon.svg';
import Styles from './TopButton.module.css';
import { getColor } from '@/theme/utils';
import { useEffect, useState } from 'react';

export function TopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleTopButton = () => {
      if (window.scrollY > 800) {
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

  return (
    <>
      {showButton && (
        <button
          type="button"
          className={Styles.TopButton}
          style={{ backgroundColor: getColor('secondary') }}
          onClick={scrollToTop}
        >
          <img src={topButtonIcon} alt="위쪽 화살표" />
          Top
        </button>
      )}
    </>
  );
}
