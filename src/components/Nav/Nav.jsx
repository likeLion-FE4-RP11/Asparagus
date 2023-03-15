import React from 'react';
import Styles from './Nav.module.css';
import { A11yHidden } from '@/components/A11yHidden/A11yHidden';

export default function Nav({}) {
  return (
    <nav className={Styles.Nav}>
      <A11yHidden as="h2">메인 메뉴</A11yHidden>
      <ul className={Styles.NavList}>
        <li>
          <a href="/">Upload</a>
        </li>
        <li>
          <a href="/">Log In</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
