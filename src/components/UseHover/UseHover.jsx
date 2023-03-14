import { useCallback, useEffect, useState, useRef } from 'react';
import Styles from './UseHover.module.css';

export default function UseHover() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = useCallback(() => {
    setIsHovering(true);
    console.log('됩니다1');
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    console.log('됩니다2');
  }, []);

  return (
    <div className={Styles.HoverContainer}>
      <button
        className={Styles.Hover}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        1번째
      </button>
    </div>
  );
}
