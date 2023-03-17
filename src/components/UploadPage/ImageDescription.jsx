import { A11yHidden } from '@/components';
import { useEffect, useId, useRef } from 'react';
import * as S from './ImageDescription.styled';

export function DescriptionInput() {
  const id = useId();
  const inputRef = useRef(null);

  useEffect(
    'blur',
    (e) => {
      const input = inputRef.current;
      const component = input.parentElement;

      input.addEventListener((e) => {
        if (e.target.value.length > 0) {
          component.classList.add(S.inputed);
        } else {
          component.classList.remove(S.inputed);
        }
      });
    },
    []
  );
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
      />
    </section>
  );
}
