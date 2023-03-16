import React from 'react';
import styled from 'styled-components/macro';
import '@/styles/normarlize.css';
import '@/styles/reset.css';
import Logo from '@/assets/Logo.png';

const FooterArea = styled.footer`
  background: #F2E9E4;
  padding: 64px 0px;
  width: 1920px;
  height: 460px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.section`
  width: auto;
  height: 270px;
  transform:translate(182px,44px);
  display: absolute;
`

const FirstHeading = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 140px;
  display: flex;
  align-items: center;
  color: #4E4C4C;
`

const FirstParagraph = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 21.328px;
  line-height: 160%;
  text-align: left;
  color: #333333;
  span{
    display: block;
  }
`

const Member = styled.section`
  width: 733px;
  height: 270px;  
  text-align: left;
  transform:translate(0px,76px);
  display: absolute;
`
const SecondHeading = styled.h2`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 37.897px;
  line-height: 140%;
  color: #4E4C4C;
`

const SecondParagraph = styled.ul`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 21.328px;
  line-height: 160%;
  color: #676464;
`


const Footer = () => {
  return (
    <FooterArea>
        <Info>
         <FirstHeading>
           <img src={Logo} alt="아이즈 갤러리 로고" />&nbsp;
            I&apos;s gallery</FirstHeading>
          <FirstParagraph>
            <span>Preserve your photos and leave memories.</span>
            <span>I’s gallery is invites you to your exhibition.</span>
            <span>&nbsp;</span>
            <span>COPYRIGHT@2023 | I’S gallery.</span>
           </FirstParagraph>
        </Info>
      

      <Member>
        <SecondHeading>Production team</SecondHeading>
            <SecondParagraph>
              <li>김진섭&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/seovee">https://github.com/seovee</a>
              </li>
              <li>김진희&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/kyuran6">https://github.com/kyuran6</a>
              </li>
              <li>문나래&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/munanrae">https://github.com/munanrae</a>
              </li>
              <li>오승택&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/5wintaek">https://github.com/5wintaek</a>
              </li>
              <li>최예송&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://github.com/to06109">https://github.com/to06109</a>
              </li>
            </SecondParagraph>
      </Member>
    </FooterArea>
        
  )
}

export default Footer;