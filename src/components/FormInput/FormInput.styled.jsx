import styled from 'styled-components/macro';

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.input`
  padding: 1rem;
  width: clamp(340px, 40vw, 500px);
  margin-bottom: 32px;
  border: 0 1px solid;
  border-radius: 11px;
`;

export const labelStyle = styled.label`
  color: #4e4c4c;
  font-weight: 400;
  font-size: 21px;
  margin-bottom: 12px;
  width: clamp(340px, 40vw, 500px);
`;
