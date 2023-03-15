import Styles from './CategoryTitle.module.css';

export function CategoryTitle({ title }) {
  return (
    <div className={Styles.CategoryTitleContainer}>
      <h3 className={Styles.CategoryTitle}>{title}</h3>
    </div>
  );
}
