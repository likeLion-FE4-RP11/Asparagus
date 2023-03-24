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
  const [checked, SetChecked] = useState(false);

  function handleCheckbox() {
    () => SetChecked(!checked);
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
          onChange={handleCheckbox}
        />
        <S.CheckBoxContents>{children}</S.CheckBoxContents>
      </S.CheckBoxInputContainer>
      {checked ? (
        <S.SignUpButton type="submit">{context}</S.SignUpButton>
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
