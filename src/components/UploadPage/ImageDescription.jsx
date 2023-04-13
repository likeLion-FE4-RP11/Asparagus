import { forwardRef, useId } from 'react';
import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';

const TextArea = styled.textarea`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 31.25rem;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 10rem;
  padding: 0 0 0 3.3125rem;
  &::placeholder {
    color: ${(props) => props.color};
  }
`;

export const DescriptionInput = forwardRef(function DescriptionInput(_, ref) {
  const id = useId();

  const handleInputChange = (e) => {
    ref.current.value = e.target.value;
  };

  return (
    <section style={{ width: '100%' }}>
      <TextArea
        placeholder="please write image description"
        type="text"
        id={id}
        ref={ref}
        onChange={handleInputChange}
        bgColor={getColor('gray/50')}
        color={getColor('gray/150')}
      />
    </section>
  );
});
