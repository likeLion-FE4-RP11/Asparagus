import { useId, useRef, useEffect } from 'react';
import { bool, string } from 'prop-types';
import * as S from './FormInput.styled';

export function FormInput({ type, label }) {
  const id = useId();
  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    const component = input.parentElement;
    input.addEventListener('blur', (e) => {
      if (e.target.value.length > 0) {
        component.classList.add('inputed');
      } else {
        component.classList.remove('inputed');
      }
    });
  }, []);

  return (
    <S.FromInputContainer>
      <S.InputLabel htmlFor={id}>{label}</S.InputLabel>
      <S.FormInputContent ref={inputRef} id={id} type={type} />
    </S.FromInputContainer>
  );
}

FormInput.defualtProps = {
  type: 'text',
};

FormInput.propTypes = {
  type: string,
  label: string,
};
