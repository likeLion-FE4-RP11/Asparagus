import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useState, useEffect, useLayoutEffect } from 'react';
import { getColor } from '@/theme/utils';
import { Notification } from '../Notification/Notification';
import { doc, getDoc, updateDoc, query } from 'firebase/firestore';
import { db } from '@/firebase/firestore';
import { useAuthUser } from '@/contexts/AuthUser';
import { useParams } from 'react-router-dom';

const Toggle = styled.div`
  width: 105px;
  height: 53px;
  margin-left: auto;
  margin-bottom: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${(props) =>
    props.isOn === true ? getColor('primary') : getColor('gray/200')};
  transition: background-color 250ms linear;

  @media screen and (max-width: 850px) {
    scale: 70%;
    margin-bottom: 40px;
  }

  &:before {
    content: '';
    height: 44px;
    width: 44px;
    background-color: white;
    border-radius: 50%;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(props) => (props.isOn === true ? '50px' : '0')};
    transition: left 250ms linear;
  }
`;

const sample_user_uid = 'EHSFq6SN4UfSAyGTw6UH';
const sample_category_uid = {
  Daily: 'HWon7XsmCqht8pum7PZf',
  Travel: 'J5QsZE01c9QkdO1yzuVB',
  Food: 'ARtP9pAr025AGEpyWqXT',
  Hobby: 'skbzLrlxEL9f1BNlHyWt',
};

export function ToggleButton() {
  const { authUser } = useAuthUser();
  const category = useParams().name;
  const [isToggled, setIsToggled] = useState(false);
  const [isAllow, setIsAllow] = useState(true);
  let category_uid = sample_category_uid[category];

  useLayoutEffect(() => {
    if (authUser) {
      category_uid = authUser.categories[category];
    }
  }, [authUser]);

  const handleToggle = async () => {
    if (authUser) {
      category_uid = authUser.categories[category];
      setIsToggled((prev) => !prev);
      const userDoc = doc(db, 'categories', category_uid);
      let newFields = {};

      if (isToggled) {
        newFields = { isAllow: true };
        setIsAllow(true);
      } else {
        newFields = { isAllow: false };
        setIsAllow(false);
      }
      await updateDoc(userDoc, newFields);
    }
  };

  useEffect(() => {
    const getIsAllow = async () => {
      const q = query(doc(db, 'categories', category_uid));

      const data = await getDoc(q);
      setIsAllow(data.data().isAllow);
      setIsToggled(!isAllow);
    };

    if (authUser) {
      category_uid = authUser.categories[category];
      getIsAllow();
    }
  }, [authUser]);

  return (
    <div>
      <Button isOn={!isAllow} handle={handleToggle} />
      {!isAllow ? <Notification /> : ''}
    </div>
  );
}

export function Button({ isOn, handle }) {
  return <Toggle isOn={isOn} onClick={handle} />;
}

Button.propTypes = {
  isOn: PropTypes.bool,
  handle: PropTypes.func,
};
