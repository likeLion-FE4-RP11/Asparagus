import styled from 'styled-components';

export const FormInput = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  flex-flow: row nowrap;
  margin-bottom: 4px;

  &Inline {
    display: inline-flex;
  }
  &:focus-within,
  &.inputed {
    .label {
      translate: -10px -100%;
      scale: 0.64;
    }
  }
`;

export const Styledlabel = styled.label`
  position: absolute;
  left: 20px;
  top: 50%;
  translate: 0 -40%;
  transition: all 0.2s ease-out;
  color: $label-color;
  font-size: 14px;
`;

const Styledinput = styled.input`
  border: 1px solid $border-color;
  padding: 1.6em 1em 1em;
  width: clamp(320px, 20vw, 500px);
  transition: all 0.2s ease-out;
  border-radius: 4px;
  font-size: 14px;
  color: $input-color;
  &:focus {
    outline: 4px solid rgba($border-color, 0.4);
  }
`;
