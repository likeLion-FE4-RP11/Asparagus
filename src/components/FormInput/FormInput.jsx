import { useId, useRef } from 'react';
import { bool, string } from 'prop-types';
import { A11yHidden } from '@/components/';
import * as S from './FormInput.styled';

export function FormInput({ label, type, invisibleLabel, ...restProps }) {
  const id = useId();

  // const inputRef = useRef(null);

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
    <S.FormInput>
      {renderLabel(id, label, invisibleLabel)}
      <S.InputStyle type={type} id={id} {...restProps} />
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
    <A11yHidden as="label" htmlFor={id} className="label">
      {label}
    </A11yHidden>
  ) : (
    <S.labelStyle htmlFor={id}>{label}</S.labelStyle>
  );
}
