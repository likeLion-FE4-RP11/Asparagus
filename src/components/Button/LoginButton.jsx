import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '@/theme/utils';

const ButtonStyle = styled.button`
  width: 521px;
  height: 65px;
  user-select: none;
  cursor: pointer;
  border: 0px;
  border-radius: 11px;
  margin-top: 10px;
  color: #000
  background-color: ${(props) => props.bgColor};
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
  children: PropTypes.string,
};
