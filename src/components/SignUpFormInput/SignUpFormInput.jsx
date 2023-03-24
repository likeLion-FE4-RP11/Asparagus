import { useId, useRef, useEffect } from 'react';
import { bool, string } from 'prop-types';
import * as S from './SignUpFormInput.styled';

export function SignUpFormInput({ type, label, ...restProps }) {
  const id = useId();
  const inputRef = useRef(null);

  // useEffect(() => {
  //   const input = inputRef.current;
  //   const component = input.parentElement;
  //   input.addEventListener('blur', (e) => {
  //     if (e.target.value.length > 0) {
  //       component.classList.add('inputed');
  //     } else {
  //       component.classList.remove('inputed');
  //     }
  //   });
  // }, []);

  return (
    <S.FromInputContainer>
      <S.InputLabel htmlFor={id}>{label}</S.InputLabel>
      <S.FormInputContent ref={inputRef} id={id} type={type} {...restProps} />
    </S.FromInputContainer>
  );
}

SignUpFormInput.defualtProps = {
  type: 'text',
};

SignUpFormInput.propTypes = {
  type: string,
  label: string,
};
