import React from 'react';
import Nav from '@/components/Nav/Nav';
import Styles from './Header.module.css';
import Logo from '@/assets/Logo.svg';

export default function Header() {
  return (
    <header className={Styles.Header}>
      <div className={Styles.HeaderContainer}>
        <h1>
          <a href="/">
            <img src={Logo} alt="아이즈 갤러리 로고" />
          </a>
        </h1>
        <Nav />
      </div>
    </header>
  );
}
