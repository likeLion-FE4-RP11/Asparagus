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
  font-size: 1.8rem;
  font-weight: 250;
  /* transition: all 0.2s ease-out; */
`;

export const FormImage = styled.img``;

export const FormInputContent = styled.input`
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  /* transition: all 0.2s ease-out; */
`;
