import { A11yHidden } from '@/components';
import { useEffect, useId, useRef } from 'react';
import styled from 'styled-components/macro';
import { getColor } from '@/theme/utils';

const TextArea = styled.textarea`
  background-color: ${(props) => props.bgColor};
  width: 1563px;
  height: 500px;
  font-weight: 400;
  font-size: 43px;
  line-height: 160px;
  padding: 0 0 0 53px;
  &::placeholder {
    color: #333333;
  }
`;

// const TextInput = styled.TextInput.attr({
//   placeholderTextColor: 'red',
//   textarea::
// });

export function DescriptionInput() {
  const id = useId();
  const inputRef = useRef('');

  const handleInputChange = (e) => {
    inputRef.current = e.target.value;
  };

  const submit = async () => {
    // fetch, axios
    console.log(inputRef.current);
    // const result = await fetch('POST', '주소');
  };

  return (
    <section>
      <A11yHidden as="label" htmlFor={id}>
        이미지 설명란
      </A11yHidden>
      <TextArea
        placeholder="please write image description"
        type="text"
        id={id}
        ref={inputRef}
        onChange={handleInputChange}
        bgColor={getColor('gray/50')}
      />
      <button onClick={submit}>전송</button>
    </section>
  );
}
