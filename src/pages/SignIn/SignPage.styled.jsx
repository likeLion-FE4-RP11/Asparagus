import styled from 'styled-components/macro';

export const Img = styled.img`
  margin-right: 6px;
`;

export const Header = styled.h2`
  /* background-color: green; */
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  margin-bottom: 35px;
`;

export const FormContainer = styled.div`
  /* background-color: red; */
`;

export const Info = styled.p`
  /* background-color: orange; */
  margin-left: 115px;
  a {
    color: #3385ff;
  }
`;
