import styled from 'styled-components/macro';

export const Img = styled.img`
  margin-right: 6px;
`;

export const Header = styled.h2`
  font-size: ${(props) => props.fontSize};
  font-weight: 700;
  margin-bottom: 35px;
`;

export const FormContainer = styled.section`
  display: flex;
  flex-flow: row-reverse nowrap;
  width: 100%;
  justify-content: space-between;
`;

export const Info = styled.p`
  a {
    color: #3385ff;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

export const Logo = styled.h1`
  position: absolute;
  right: 0;
  padding: 66px 81px 0 0;
  font-weight: 700;
  color: white;
  font-size: 50px;
`;

export const ImgContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: aliceblue;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }
`;
