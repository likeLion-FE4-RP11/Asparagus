import { useId } from 'react';
import { bool, string } from 'prop-types';
import { A11yHidden } from '@/components/';
import * as S from './FormInput.styled';

export function FormInput({ label, type, invisibleLabel, ...restProps }) {
  const id = useId();
  return (
    <S.FormInput>
      {renderLabel(id, label, invisibleLabel)}
      <S.InputStyle type={type} id={id} {...restProps} />
      <input type="text" {...restProps} />
    </S.FormInput>
  );
}

FormInput.defaultProps = {
  type: 'text',
  invisibleLabel: false,
};

FormInput.propTypes = {
  type: string,
  label: string.isRequired, //props가 제공되지 않았을 때 경고가 보이도록 하는것
  invisibleLabel: bool,
};

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id}>
      {label}
    </A11yHidden>
  ) : (
    <S.LabelStyle htmlFor={id}>{label}</S.LabelStyle>
  );
}
