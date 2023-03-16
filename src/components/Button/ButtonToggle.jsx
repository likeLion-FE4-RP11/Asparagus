import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getColor } from '@/theme/utils';

const Toggle = styled.div`
  width: 156px;
  height: 78px;
  margin-left: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${(props) =>
    props.isOn === true ? getColor('primary') : getColor('gray/200')};
  transition: background-color 300ms linear;
  &:before {
    content: '';
    height: 66px;
    width: 66px;
    background-color: white;
    border-radius: 50%;
    margin: 0 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(props) => (props.isOn === true ? '80px' : '0')};
    transition: left 300ms linear;
  }
`;

export function ButtonToggle() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => setIsToggled((prev) => !prev);
  return (
    <div>
      <ToggleButton isOn={isToggled} handle={handleToggle} />
    </div>
  );
}

export const ToggleButton = ({ isOn, handle }) => {
  return <Toggle isOn={isOn} onClick={handle} />;
};

ButtonToggle.propTypes = {
  isToggled: PropTypes.bool,
  onToggle: PropTypes.func,
};
