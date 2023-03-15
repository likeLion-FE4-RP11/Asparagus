import React, { useState } from 'react';
import Styles from './LikeButton.module.css';
import HeartImg from './heart.png';
import EmptyHeartImg from './empty-heart.png';


const LikeButton = ({ item }) => {
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(0);
  
  //좋아요 클릭시
  const onClick = () => {
    setHeart((prev) => !prev);
    if(heart){
      setCount(count-1);
    }else{
      setCount(count+1);
    }
    
  };

  return (
    <div className="LikeButtonArea" onClick={onClick}>
      {heart ? (
        <img src={HeartImg} /> // true (꽉찬하트)>
      ) : (
        <img src={EmptyHeartImg} /> // false (빈 하트)
      )}
      <span className={Styles.LikeButton}>{count}</span>

    </div>

  );
};


export default LikeButton;