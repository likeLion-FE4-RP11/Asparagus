import Styles from './ButtonToggle.module.css';
import PropTypes from 'prop-types';

export function ButtonToggle({ isToggled, onToggle }) {
  return (
    <label className={Styles.Switch}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={Styles.Slider}></span>
    </label>
  );
}

ButtonToggle.propTypes = {
  isToggled: PropTypes.bool,
  onToggle: PropTypes.func,
};
