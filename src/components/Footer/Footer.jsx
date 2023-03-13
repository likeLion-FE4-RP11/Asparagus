import React from 'react';
import style from './Footer.css';
import '@/styles/normarlize.css'
import '@/styles/reset.css'
import Logo from './Logo.png';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterInner">
        <div className="Info">
         <div className="Heading">
           <img src={Logo} alt="아이즈 갤러리 로고" />&nbsp;
            I's gallery</div>
          <div className="Paragraph">
          <ul>
            <li>Preserve your photos and leave memories.</li>
            <li>I’s gallery is invites you to your exhibition.</li>
            <li>&nbsp;</li>
            <li>COPYRIGHT@2023 | I’S gallery.</li>
          </ul>
           </div>
        </div>
      

      <div className="Member">
        <div className="Heading1">Production team</div>
          <div className="Paragraph1">
            <ul>
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
          </div>
      </div>
      </div>
    </div>
        
  )
}

export default Footer;