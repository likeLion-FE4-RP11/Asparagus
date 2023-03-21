import { useEffect, useId, useRef } from 'react';
import { string } from 'prop-types';
import { A11yHidden } from '@/components/';

export function FormInput({ label, type, invisibleLabel, ...restProps }) {
  const id = useId();

  const inputRef = useRef(null);

  useEffect(() => {
    const input = inputRef.current;
    // const component = input.parentElement;
  });

  return (
    <div>
      {renderLabel(id, label, invisibleLabel)}
      <input type={type} id={id} {...restProps} />
    </div>
  );
}

FormInput.defaultProps = {
  type: 'text',
  invisibleLabel: false,
};

FormInput.propTypes = {
  type: string,
  label: string.isRequired, //props가 제공되지 않았을 때 경고가 보이도록 하는것
};

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id}></A11yHidden>
  ) : (
    <label htmlFor={id}>{label}</label>
  );
}
