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
  top: 125px;
  left: 250px;

  z-index: 10;
  img {
    filter: brightness(100%);
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
  @media screen and (max-width: 1000px) {
    bottom: -75px;
  }
`;

export const Themebutton = styled.div`
  align-items: center;
  cursor: pointer;
  position: relative;
  scale: 80%;
  img {
    position: absolute;
    right: 20px;
    bottom: 68px;
    @media screen and (max-width: 940px) {
      right: 90px;
    }
  }
`;
