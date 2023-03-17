import { A11yHidden } from '@/components';
import { useEffect, useId, useRef } from 'react';

export function DescriptionInput() {
  const id = useId();
  const inputRef = useRef(null);

  useEffect((e) => {
    const input = inputRef.current;
    const component = input.parentElement;
    // if(e.target.value.length > 0) {
    //   component.
    // }
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
      />
    </section>
  );
}

// function RenderLaber( ){
//   return invisibleLabel ? (

//   )
// }
