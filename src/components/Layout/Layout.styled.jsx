import { NavLink } from "react-router-dom";
import styled from 'styled-components';

export const Header = styled.header`
  padding: 20px;
  background-color: #00f7ff;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const LinkStyled = styled(NavLink)`
&.active {
  color: #fc3e1d;
}    
`;