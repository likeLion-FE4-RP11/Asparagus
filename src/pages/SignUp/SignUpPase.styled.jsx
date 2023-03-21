import styled from 'styled-components/macro';

export const SignUpContainer = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const SignUpContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;

export const FormContainer = styled.form``;

export const SingUpTitle = styled.h2`
  display: inline-block;
  text-align: start;
  width: 100%;
  font-size: 38px;
  font-weight: 700;
`;

export const SignUpButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 1.8rem;
  font-size: 20px;
  border-radius: 10px;
  border: 0px;
  background-color: black;
  color: white;
  padding: 1.1rem;
`;

export const FormCheckBox = styled.p`
  margin-top: 1.8rem;
  font-size: 20px;
  text-align: center;
`;

export const HalfImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const LogoImage = styled.span`
  position: absolute;
  font-size: 50px;
  font-weight: 700;
  color: white;
  top: 65px;
  right: 80px;
`;
