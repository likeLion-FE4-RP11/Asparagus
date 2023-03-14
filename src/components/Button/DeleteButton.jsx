import React from 'react';
import Styles from './DeleteButton.module.css';
// import { getColor } from '@/theme/utils';

export default function DeleteButton() {
  const ClickButton = () => {
    console.log('test');
  };
  return (
    <button type="button" onClick={ClickButton} className={Styles.Delete}>
      Delete
    </button>
  );
}
