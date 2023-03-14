import { useState } from 'react';
import Styles from './DeleteButton.module.css';
import PropTypes from 'prop-types';

export function DeleteButton() {
  const [data, setData] = useState([]);
  const OnRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);

    const NewImageList = data.filter((data) => {
      return data.id !== targetId;
    });
    setData(NewImageList);
  };
  return (
    <button
      type="button"
      onClick={() => {
        OnRemove;
      }}
      className={Styles.Delete}
    >
      Delete
    </button>
  );
}
