import { useState, useId } from 'react';
import * as S from './CheckBox.styled';

export function CheckBox() {
  const id = useId();
  const disabled = false;
  const [checked, SetChecked] = useState(false);

  console.log(checked);
  function handleCheckbox() {
    return;
  }

  return (
    <div>
      <label htmlFor={id}>개인정보 동의 체크</label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        id={id}
        onChange={() => SetChecked(!checked)}
      />
      {checked ? (
        <S.SignUpButton>Sign me up!</S.SignUpButton>
      ) : (
        <S.SignUpButton>로그인해라 이자식아</S.SignUpButton>
      )}
    </div>
  );
}
