import Styles from './Nav.module.css';
import { A11yHidden } from '@/components/index';
import { NavLink } from 'react-router-dom';
import { useAuthUser } from '@/contexts/AuthUser';
import { useSignOut } from '@/firebase/auth';

export function Nav() {
  const { authUser, updateAuthUser } = useAuthUser();
  const { signOut } = useSignOut();

  const handleSignOut = () => {
    console.log('로그아웃');
    signOut();
    updateAuthUser(null);
  };

  return (
    <nav className={Styles.Nav}>
      <A11yHidden as="h2">메인 메뉴</A11yHidden>
      <ul className={Styles.NavList}>
        <li>
          <NavLink to="/upload">Upload</NavLink>
        </li>
        {authUser ? (
          <>
            <li>
              <NavLink to="/">
                <button className={Styles.Navtest} onClick={handleSignOut}>
                  Logout
                </button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">{authUser.name}님</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signin">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
