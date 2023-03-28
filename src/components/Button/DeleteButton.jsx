import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';
import PropTypes from 'prop-types';

const Button = styled.button`
  width: 214px;
  height: 77px;
  font-size: 2.36rem;
  align-items: center;
  border-radius: 20px;
  border: 2px solid transparent;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Pretendard';
  font-weight: 600;
  background-color: ${(props) => props.bgColor};
  &:hover {
    border-color: #ffffff;
    background-color: #b2673c;
  }
`;

export function DeleteButton({ onClick, ...restProps }) {
  return (
    <Button
      type="button"
      bgColor={getColor('delete')}
      onClick={onClick}
      {...restProps}
    >
      Delete
    </Button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};
