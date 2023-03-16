import PropTypes from 'prop-types';
import Styles from './DesignParagraph.module.css';
import { getColor } from '@/theme/utils';

export function DesignParagraph({ children }) {
  // toggle button state 받기
  const tempIsDark = false;

  return (
    <section className={Styles.DesignParagraph}>
      <p
        style={{
          color: tempIsDark ? getColor('white') : getColor('secondary'),
        }}
      >
        {children}
      </p>
    </section>
  );
}

DesignParagraph.defualtProps = {
  children: '디자인 문구를 넣는 곳입니다. ',
};

DesignParagraph.propTypes = {
  children: PropTypes.node,
};
