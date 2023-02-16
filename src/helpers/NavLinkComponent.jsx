import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export default function NavLinkComponent({ to, children, from }) {
  return (
    <StyledLink to={to} state={{ from }}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
    border-bottom: 2px solid orange;
  }
`;

