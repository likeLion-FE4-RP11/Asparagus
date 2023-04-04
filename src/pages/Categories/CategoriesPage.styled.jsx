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
`;

export const testContainer = styled.div`
  width: 87px;
  height: 87px;
  position: absolute;
  top: 103px;
  left: 329px;

  z-index: 10;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageTitle = styled.h2`
  position: absolute;
  font-size: 4.375rem;
  font-weight: 700;
  top: 103px;
  left: 103px;
  color: ${(props) => props.color};
  z-index: 10;
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
  font-size: 3.125rem;
  font-weight: 600;
  position: absolute;
  top: 200px;
  left: 103px;
  bottom: 0px;
  color: ${(props) => props.color};
  z-index: 10;
  @media screen and (max-width: 1000px) {
    bottom: -75px;
  }
`;

export const Themebutton = styled.div`
  align-items: center;
  cursor: pointer;
  position: relative;
  img {
    position: absolute;
    right: 190px;
    bottom: 60px;
  }
`;
