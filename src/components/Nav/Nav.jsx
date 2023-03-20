import Styles from './Nav.module.css';
import { A11yHidden } from '@/components/index';
import { NavLink } from 'react-router-dom';

export function Nav() {
  return (
    <nav className={Styles.Nav}>
      <A11yHidden as="h2">메인 메뉴</A11yHidden>
      <ul className={Styles.NavList}>
        <li>
          <NavLink to="/upload">Upload</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    </nav>
  );
}
