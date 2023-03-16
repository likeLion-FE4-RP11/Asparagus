import { useState } from 'react';
import styled from 'styled-components/macro';
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
  background-color: #f59d6c;

  &:hover {
    border-color: #ffffff;
    background-color: #b2673c;
  }
`;

export function DeleteButton() {
  const [data, setData] = useState(false);

  const OnRemove = (children) => {
    console.log(`${children}가 삭제되었습니다.`);

    const NewImageList = data.filter((data) => {
      return data.id !== children;
    });
    setData(NewImageList);
  };
  return (
    <Button type="button" onClick={OnRemove}>
      Delete
    </Button>
  );
}

DeleteButton.propTypes = {
  data: PropTypes.bool,
  setData: PropTypes.bool,
};
