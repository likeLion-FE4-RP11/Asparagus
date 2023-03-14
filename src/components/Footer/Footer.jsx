import React from 'react';
import Styles from './Footer.module.css';
import '@/styles/normarlize.css'
import '@/styles/reset.css'
import Logo from './Logo.png';

const Footer = () => {
  return (
    <footer className={Styles.Footer}>
      <div className={Styles.FooterInner}>
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
      </div>
    </footer>
        
  )
}

export default Footer;