import styled from 'styled-components/macro';

export const FirstContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1.2rem;
  margin-top: 5rem;

  
  @media screen and (max-width: 940px) {
    grid-template-columns: 1fr;
    grid-gap: 1.2rem;
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
  `;

export const ImageTitle = styled.h1`
  font-size: 4.375rem;
  font-weight: 700;
  left: 170px;
  bottom: 80px;
  color: ${(props) => props.color};
`;

export const BaseText = styled.h1`
  font-size: 3.125rem;
  font-weight: 600;
  left: 170px;
  bottom: 0px;
  color: ${(props) => props.color};
  @media screen and (max-width: 1000px) {
    bottom: -75px;
`;

export const ImageLogo = styled.img`
  position: absolute;
  top: 10px;
  left: 220px;
`;

export const TextContainer = styled.section`
  position: absolute;
  width: 1000px;
  height: 700px;
  max-width: 100%;
  height: 100%;
  top: 450px;
  left: 150px;
  z-index: 1000;
`;

export const Themebutton = styled.div`
  align-items: center;
  cursor: pointer;
  position: relative;
  img {
    position: absolute;
    right: 190px;
    bottom : 60px;

`;
