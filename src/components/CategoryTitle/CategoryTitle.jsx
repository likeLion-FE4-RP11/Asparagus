import React from 'react';
import Styles from './CategoryTitle.module.css';

export default function CategoryTitle({ title }) {
  return (
    <div className={Styles.CategoryTitleContainer}>
      <h3 className={Styles.CategoryTitle}>{title}</h3>
    </div>
  );
}
