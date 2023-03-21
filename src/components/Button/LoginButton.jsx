import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  user-select: none;
  cursor: pointer;
  background-color: red;
`;

export function LoginButton({ disabled, children, ...restProps }) {
  return (
    <ButtonStyle type="button" disabled={disabled} {...restProps}>
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
