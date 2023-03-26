import { useState } from 'react';
import styled from 'styled-components/macro';
import HeartImg from '@/assets/Heart.png';
import EmptyHeartImg from '@/assets/empty-heart.png';

const LikeBtn = styled.span`
  color: #f9fbfd;
  font-size: 43px;
  font-style: normal;
  padding-left: 15px;
`;

const LikeButtonArea = styled.button`
  display: flex;
  flex-flow: row;
  align-items: center;
  position: absolute;
  left: 170px;
  bottom: -400px;
  appearance: none;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 940px) {
    bottom: -110px;
`;

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
    <LikeButtonArea type="button" onClick={handleLikeButton}>
      {heart ? (
        <img src={HeartImg} alt="꽉찬하트" /> // true (꽉찬하트)>
      ) : (
        <img src={EmptyHeartImg} alt="빈하트" /> // false (빈 하트)
      )}
      <LikeBtn>{count}</LikeBtn>
    </LikeButtonArea>
  );
}
