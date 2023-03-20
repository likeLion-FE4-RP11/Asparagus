import { useState } from 'react';
import { SeeMoreImg } from '@/components/index';
import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';

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
`;
// background: ${({ theme }) => theme.color['white']};  // <- 질문하기
/* component */
export function SeeMoreButton() {
  const [modal, setModal] = useState(false);

  const handleSeeMore = () => {
    setModal(!modal);
  };

  return (
    <div>
      <MoreButton
        type="button"
        onClick={handleSeeMore}
        color={getColor('secondary')}
      >
        S E E M O R E
      </MoreButton>
      {modal == true ? <SeeMoreImg /> : null}
    </div>
  );
}
