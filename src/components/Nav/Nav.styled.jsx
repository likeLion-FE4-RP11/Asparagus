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
  justify-content: space-between;
  gap: 180px;
`;

export const NavListAncor = styled(NavLink)`
  text-decoration: none;
  font-size: 37.9px;
  font-weight: 700;
  color: #4e4c4c;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 37.9px;
  font-weight: 700;
  color: #4e4c4c;
`;
