import styled from 'styled-components/macro';

export const CheckBoxAndButton = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;

export const CheckBoxInputContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  margin-top: 1.8rem;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const CheckBoxContents = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
`;

export const SignUpButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 10px;
  display: block;
  width: 100%;
  font-size: 1.7rem;
  color: white;
  margin: 1.8rem;
  padding: 1.1rem;
  cursor: pointer;

  &:disabled {
    background-color: lightgrey;
    cursor: not-allowed;
  }
`;
