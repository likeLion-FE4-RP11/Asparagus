import { useState, useId, forwardRef } from 'react';
import { A11yHidden } from '@/components/index';
import * as S from './CheckBox.styled';
import PropTypes from 'prop-types';

export const CheckBox = forwardRef(function CheckBox(
  { context, children },
  formStateRef
) {
  const id = useId();
  const disabled = false;
  const [checked, setChecked] = useState(false);

  function handleCheckbox() {
    setChecked(!checked);
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
          role="checkbox"
          checked={checked}
          id={id}
          onChange={handleCheckbox}
          aria-label="개인정보 체크박스를 체크하면 회원가입 버튼이 활성화 됩니다."
        />
        <S.CheckBoxContents>{children}</S.CheckBoxContents>
      </S.CheckBoxInputContainer>
      {checked ? (
        <S.SignUpButton type="submit" role="button" aria-label="회원가입">
          {context}
        </S.SignUpButton>
      ) : (
        <S.SignUpButton disabled={true}>{context}</S.SignUpButton>
      )}{' '}
    </S.CheckBoxAndButton>
  );
});

CheckBox.propTypes = {
  context: PropTypes.string,
  children: PropTypes.node,
};
