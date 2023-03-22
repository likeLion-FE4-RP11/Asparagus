import { useState } from 'react';

export function CheckBox({ children, disabled, checked }) {
  const [isCheck, SetIsCheck] = useState(false);

  const 

  return (
    <label htmlFor="/">
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(e) => console.log(e)}
      />
      {children}
    </label>
  );
}
