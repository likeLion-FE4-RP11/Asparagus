import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import HeartImg from '@/assets/Heart.png';
import EmptyHeartImg from '@/assets/empty-heart.png';
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase/firestore';

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
  bottom: 50px;
  appearance: none;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 940px) {
`;

export function LikeButton() {
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState([]);
  const user_uid = 'EHSFq6SN4UfSAyGTw6UH';

  const updateCount = async (likeCount) => {
    setHeart((prev) => !prev);
    const userDoc = doc(db, 'categories', likeCount);
    const newFields = { likeCount: likeCount + 1 };
    await updateDoc(userDoc, newFields);
  };

  useEffect(() => {
    const getCounter = async () => {
      const q = query(
        collection(db, 'categories'),
        where('user_uid', '==', user_uid),
        where('description', '==', '이 카테고리는 Travel')
      );

      const data = await getDocs(q);
      const dataList = [];
      data.docs.map((doc) => dataList.push(doc.data().likeCount));
      setCount(dataList);
    };

    getCounter();
  }, []);

  console.log(count);

  return (
    <LikeButtonArea
      type="button"
      onClick={() => {
        updateCount(count[0]);
      }}
    >
      {heart ? (
        <img src={HeartImg} alt="좋아요 클릭 한 상태" /> // true (꽉찬하트)>
      ) : (
        <img src={EmptyHeartImg} alt="좋아요 취소 한 상태" /> // false (빈 하트)
      )}
      <LikeBtn>{count[0]}</LikeBtn>
    </LikeButtonArea>
  );
}
