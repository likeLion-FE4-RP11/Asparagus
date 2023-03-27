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
  /* position: relative; */
  background-color: pink;
  width: 100%;
  /* height: 100%; */
  /* min-width: 1200px; */
  /* align-items: center; */
  justify-content: space-between;
`;

export const Info = styled.p`
  margin-left: 115px;
  a {
    color: #3385ff;
  }
`;

export const ImgContainer = styled.div`
  width: 500px;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const LeftContainer = styled.div`
  background-color: green;
`;
