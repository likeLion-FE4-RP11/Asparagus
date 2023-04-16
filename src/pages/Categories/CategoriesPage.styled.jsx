import styled from 'styled-components/macro';
import { ImageContainer } from '@/components';

export const FirstContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.2rem;
  margin-top: 5rem;

  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }
`;

export const SecondContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1.2rem;
  margin-top: 1.75rem;
  margin-bottom: 8.75rem;

  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }
`;

export const ThirdContainet = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1.2rem;
  margin-top: 5rem;

  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }
`;

export const FourthContainet = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.2rem;
  margin-top: 1.75rem;
  margin-bottom: 8.75rem;

  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
  }
`;

export const categoryMainContainer = styled(ImageContainer)`
  position: relative;
  width: 100%;
  img {
    filter: brightness(70%);
  }
`;

export const testContainer = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 130px;
  left: 250px;
  z-index: 10;
  img {
    filter: brightness(100%);
  }
  @media screen and (max-width: 850px) {
    top: 60px;
    left: 190px;
    scale: 70%;
  }
`;

export const ImageTitle = styled.h2`
  position: absolute;
  font-size: 45px;
  font-weight: 700;
  top: 120px;
  left: 103px;
  color: ${(props) => props.color};
  z-index: 10;
  @media screen and (max-width: 850px) {
    font-size: 32px;
    top: 67px;
  }
`;

// export const ImageLogo = styled.img`

// `;

export const ChangeInput = styled.input`
  position: absolute;
  top: 200px;
  left: 103px;
  z-index: 10;
`;

export const BaseText = styled.h3`
  font-size: 30px;
  font-weight: 600;
  position: absolute;
  top: 200px;
  left: 103px;
  bottom: 0px;
  color: ${(props) => props.color};
  z-index: 10;
  @media screen and (max-width: 850px) {
    font-size: 20px;
    top: 120px;
  }
`;

export const Themebutton = styled.div`
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  @media screen and (max-width: 850px) {
    img {
      width: 35px;
      height: 35px;
      margin-top: 10px;
      margin-right: 0px;
    }
  }
`;

export const Subnav = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  @media screen and (max-width: 850px) {
    margin-top: 30px;
  }
`;
