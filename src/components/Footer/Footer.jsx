import React from 'react';
import Styles from './Footer.module.css';
import '@/styles/normarlize.css'
import '@/styles/reset.css'
import Logo from './Logo.png';

/*footer*/

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


/*I's gallery*/

.Info{
  width: auto;
 /*width: 733px;*/
  height: 270px;
  transform:translate(182px,44px);
  display: absolute;
}

.Logo{
  /* Logo */
  width: 74px;
  height: 61px;
}

.FirstHeading{
  /* I's gallery */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 140px;
  /* identical to box height, or 280% */

  display: flex;
  align-items: center;
  color: #4E4C4C;
}

.FirstParagraph{
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 21.328px;
  line-height: 160%;
  text-align: left;
  color: #333333;
}

.FirstParagraph span{
  display: block;
}


/*Product team*/
.Member{
  width: 733px;
  height: 270px;  
  text-align: left;
  transform:translate(0px,76px);
  display: absolute;
}

.SecondHeading{
  /* Production team */
  /* Heading/XXL */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 37.897px;
  line-height: 140%;
  /* identical to box height, or 53px */

  color: #4E4C4C;
  }

.SecondParagraph{
    /* Paragraph/Large */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 21.328px;
  line-height: 160%;
  /* or 34px */

  color: #676464;
  }


a{
  text-decoration: none;
  color: #676464
}

li{
  list-style:none;
}

const Footer = () => {
  return (
    <FooterArea>
        <section className={Styles.Info}>
         <div className={Styles.FirstHeading}>
           <img src={Logo} alt="아이즈 갤러리 로고" />&nbsp;
            I&apos;s gallery</div>
          <p className={Styles.FirstParagraph}>
            <span>Preserve your photos and leave memories.</span>
            <span>I’s gallery is invites you to your exhibition.</span>
            <span>&nbsp;</span>
            <span>COPYRIGHT@2023 | I’S gallery.</span>
           </p>
        </section>
      

      <section className={Styles.Member}>
        <h2 className={Styles.SecondHeading}>Production team</h2>
            <ul className={Styles.SecondParagraph}>
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
            </ul>
      </section>
    </FooterArea>
        
  )
}

export default Footer;