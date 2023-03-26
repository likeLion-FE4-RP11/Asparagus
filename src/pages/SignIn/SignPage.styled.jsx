import styled from 'styled-components/macro';
import loginImage from '@/assets/BackgroundImage.svg';

export const Img = styled.img`
  margin-right: 6px;
`;

export const Header = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  margin-bottom: 35px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  background-color: pink;
  width: auto;
  height: 100%;
  min-width: 1200px;
  justify-content: space-between;
`;

export const Info = styled.p`
  margin-left: 115px;
  a {
    color: #3385ff;
  }
`;

export const ImgContainer = styled.div``;
