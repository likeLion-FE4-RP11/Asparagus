import styled from 'styled-components/macro';

export const FooterArea = styled.footer`
  background: #f2e9e4;
  width: 100%;
  height: 460px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
    text-align: center;
  }
`;

export const Info = styled.section`
  height: 270px;
  transform: translate(250px, 5px);
  @media screen and (max-width: 800px) {
    position: relative;
    transform: translate(200px, 50px);
  }
`;

export const FirstHeading = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 2.43rem;
  display: flex;
  align-items: center;
  color: #333333;
  @media screen and (max-width: 940px) {
    font-size: 3rem;
  }
`;

export const FirstParagraph = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 160%;
  text-align: left;
  color: #333333;
  span {
    display: block;
    font-size: 1.3rem;
  }
`;

export const Member = styled.section`
  width: 500px;
  height: 240px;
  color: #333333;
  transform: translate(-100px, 0px);
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const SecondHeading = styled.h2`
  font-style: normal;
  text-align: left;
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  margin-bottom: 25px;
  @media screen and (max-width: 940px) {
    display: none;
  }
`;

export const SecondParagraph = styled.ul`
  font-style: normal;
  text-align: left;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 160%;
  @media screen and (max-width: 940px) {
    display: none;
  }
`;
