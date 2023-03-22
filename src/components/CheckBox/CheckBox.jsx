import { useState, useId } from 'react';
import { A11yHidden } from '@/components/index';
import * as S from './CheckBox.styled';

export function CheckBox({ context, children }) {
  const id = useId();
  const disabled = false;
  const [checked, SetChecked] = useState(false);

  function handleCheckbox() {
    return;
  }

  return (
    <S.CheckBoxAndButton>
      <A11yHidden as="label" htmlFor={id}>
        개인정보 동의 체크란
      </A11yHidden>
      <S.CheckBoxInputContainer>
        <S.CheckBox
          type="checkbox"
          checked={checked}
          id={id}
          onChange={() => SetChecked(!checked)}
        />
        <S.CheckBoxContents>{children}</S.CheckBoxContents>
      </S.CheckBoxInputContainer>
      {checked ? (
        <S.SignUpButton>{context}</S.SignUpButton>
      ) : (
        <S.SignUpButton disabled={true}>{context}</S.SignUpButton>
      )}{' '}
    </S.CheckBoxAndButton>
  );
}
