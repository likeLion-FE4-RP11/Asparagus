import PropTypes, { string, element, bool } from 'prop-types';
import styled from 'styled-components';
import { getColor } from '@/theme/utils';

const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 521px;
  height: 65px;
  user-select: none;
  cursor: pointer;
  border: 0px;
  border-radius: 11px;
  margin-top: 10px;
  color: ${(props) => props.color}
  background-color: ${(props) => props.bgColor};
  &.google{
    background-color: #000000;
    color: #FFFFFF;
  }
  &.facebook{
    background-color :#0066FF;
    color: #FFFFFF;
  }
  &:disabled{
    cursor: not-allowed;
  }
`;

export function LoginButton({ disabled, children, ...restProps }) {
  return (
    <ButtonStyle
      type="button"
      disabled={disabled}
      bgColor={getColor('gray/50')}
      {...restProps}
    >
      {children}
    </ButtonStyle>
  );
}

// function getClassName(disabled) {
//   let buttonStyle = {};

/* Props -------------------------------------------------------------------- */

LoginButton.defaultProps = {
  disabled: false,
};

LoginButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  // color: PropTypes.instanceOf(color),
};
