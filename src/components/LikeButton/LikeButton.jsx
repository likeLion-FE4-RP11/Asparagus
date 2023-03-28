import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import HeartImg from '@/assets/Heart.png';
import EmptyHeartImg from '@/assets/empty-heart.png';
import { doc, getDoc, updateDoc, query } from 'firebase/firestore';
import { db } from '@/firebase/firestore';
import { useAuthUser } from '@/contexts/AuthUser';
import { useParams } from 'react-router-dom';

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
  bottom: 100px;
  left: 103px;
  z-index: 10;
  appearance: none;
  background-color: transparent;
  border: none;
`;

export function LikeButton() {
  const category = useParams().name;
  const [heart, setHeart] = useState(false);
  const [count, setCount] = useState(0);
  const { authUser } = useAuthUser();

  let category_uid = '';
  if (authUser) {
    category_uid = authUser.categories[category];
  }

  const updateCount = async (likeCount) => {
    setHeart((prev) => !prev);
    const userDoc = doc(db, 'categories', category_uid);
    let newFields = {};

    if (heart) {
      newFields = { likeCount: likeCount - 1 };
      setCount(count - 1);
    } else {
      newFields = { likeCount: likeCount + 1 };
      setCount(count + 1);
    }
    await updateDoc(userDoc, newFields);
  };

  useEffect(() => {
    const getCounter = async () => {
      const q = query(doc(db, 'categories', category_uid));

      const data = await getDoc(q);
      setCount(data.data().likeCount);
    };

    getCounter();
  }, []);

  return (
    <LikeButtonArea
      type="button"
      onClick={() => {
        updateCount(count);
      }}
    >
      {heart ? (
        <img src={HeartImg} alt="좋아요 클릭 한 상태" /> // true (꽉찬하트)>
      ) : (
        <img src={EmptyHeartImg} alt="좋아요 취소 한 상태" /> // false (빈 하트)
      )}
      <LikeBtn>{count}</LikeBtn>
    </LikeButtonArea>
  );
}
