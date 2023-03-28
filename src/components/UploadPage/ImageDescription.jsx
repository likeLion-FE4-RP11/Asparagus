import { A11yHidden } from '@/components';
import { forwardRef, useId } from 'react';
import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';

const TextArea = styled.textarea`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 500px;
  font-weight: 400;
  font-size: 43px;
  line-height: 160px;
  padding: 0 0 0 53px;
  &::placeholder {
    color: ${(props) => props.color};
  }
`;

export const DescriptionInput = forwardRef(function DescriptionInput(_, ref) {
  const id = useId();

  const handleInputChange = (e) => {
    ref.current.value = e.target.value;
  };

  const submit = async () => {
    // fetch, axios
    console.log(ref.current);
    // const result = await fetch('POST', '주소');
  };

  return (
    <section style={{ width: '100%' }}>
      <A11yHidden as="label" htmlFor={id}>
        이미지 설명 입력란
      </A11yHidden>
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
