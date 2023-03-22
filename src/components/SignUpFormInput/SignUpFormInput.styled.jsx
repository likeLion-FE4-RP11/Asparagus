import styled from 'styled-components/macro';
import { getColor, getFontSize } from '@/theme/utils';

export const FromInputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 22px;
  gap: 10px;
  &.inputed {
    background-color: green;
  }
`;

export const InputLabel = styled.label`
  margin-top: 10px;
  /* transition: all 0.2s ease-out; */
`;

export const FormImage = styled.img``;

export const FormInputContent = styled.input`
  padding: 1rem;
  border-radius: 10px;
  width: clamp(340px, 40vw, 500px);
  /* transition: all 0.2s ease-out; */
`;
