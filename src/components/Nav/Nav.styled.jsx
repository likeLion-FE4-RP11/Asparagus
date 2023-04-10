import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: block;
  top: 0;
  right: 0;
`;

export const NavList = styled.ul`
  width: auto;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 30px;
`;

export const NavListAncor = styled(NavLink)`
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 600;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 700;
`;
