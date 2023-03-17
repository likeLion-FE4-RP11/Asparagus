import { A11yHidden } from '@/components';
import { useEffect, useId, useRef, useState } from 'react';
import * as S from './ImageDescription.styled';

export function DescriptionInput() {
  const id = useId();
  const inputRef = useRef(null);
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log('렌더링');
  }, []);
  return (
    <section>
      <A11yHidden as="label" htmlFor={id}>
        이미지 설명란
      </A11yHidden>
      <input
        placeholder="설명을 입력해주세요"
        type="text"
        id={id}
        ref={inputRef}
        value={name}
        onChange={handleInputChange}
      />
    </section>
  );
}

// onchange , value
