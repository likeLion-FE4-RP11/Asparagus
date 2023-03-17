import { useState } from 'react';
import Styles from './LikeButton.module.css';
import HeartImg from '@/assets/Heart.png';
import EmptyHeartImg from '@/assets/empty-heart.png';

export function LikeButton() {
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(0);

  //좋아요 클릭시
  const handleLikeButton = () => {
    setHeart((prev) => !prev);
    if (heart) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <button type="button" className="LikeButtonArea" onClick={handleLikeButton}>
      {heart ? (
        <img src={HeartImg} alt="꽉찬하트" /> // true (꽉찬하트)>
      ) : (
        <img src={EmptyHeartImg} alt="빈하트" /> // false (빈 하트)
      )}
      <span className={Styles.LikeButton}>{count}</span>
    </button>
  );
}
