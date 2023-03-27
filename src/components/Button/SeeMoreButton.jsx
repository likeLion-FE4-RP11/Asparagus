import { useState } from 'react';
import { SeeMoreImg } from '@/components/index';
import styled from 'styled-components/macro';
import { getColor, getFontSize } from '@/theme/utils';
import PropTypes from 'prop-types';

const MoreButton = styled.button`
  cursor: pointer;
  background: white;
  color: ${(props) => {
    props.color;
  }};
  padding: 20px 220px;
  border: 20;
  border-radius: 10px;
  font-weight: 600;
  line-height: 1;
  font-size: ${(props) => props.fontSize};
  letter-spacing: 15px;
  display: block;
  margin: auto;
`;
// background: ${({ theme }) => theme.color['white']};  // <- 질문하기
/* component */
export function SeeMoreButton({ children, onClick, ...restProps }) {
  const [modal, setModal] = useState(false);

  const handleSeeMore = () => {
    setModal(!modal);
  };

  if (!onClick) onClick = () => handleSeeMore();

  return (
    <>
      <MoreButton
        type="button"
        onClick={onClick}
        color={getColor('secondary')}
        fontSize={getFontSize('4xl')}
        {...restProps}
      >
        {children}
      </MoreButton>
      {modal == true ? <SeeMoreImg /> : null}
    </>
  );
}

SeeMoreButton.defaultProps = {
  children: 'SEEMORE',
};

SeeMoreButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};
