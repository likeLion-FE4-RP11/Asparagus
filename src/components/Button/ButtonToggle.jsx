import React from 'react';
import Styles from './ButtonToggle.module.css';

const ToggleButton = ({ isToggled, onToggle }) => {
  return (
    <label className={Styles.Switch}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={Styles.Slider}></span>
    </label>
  );
};

export default ToggleButton;
