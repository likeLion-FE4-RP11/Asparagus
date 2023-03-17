import { A11yHidden } from '@/components';
import { useEffect, useId, useRef } from 'react';

export function DescriptionInput() {
  const id = useId();
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
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
