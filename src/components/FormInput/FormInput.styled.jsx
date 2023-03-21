import styled from 'styled-components/macro';
import { getColor, getFontSize } from '@/theme/utils';

export const FromInputContainer = styled.div`
  background-color: orangered;
  &.inputed {
    background-color: green;
  }
`;

export const FormInputContent = styled.input`
  background-color: pink;
`;

export const InputLabel = styled.label`
  background-color: purple;
  color: white;
`;
