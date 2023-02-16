import React from 'react';
import NavLinkComponent from '../helpers/NavLinkComponent';


function Header(props) {
  return (
      <ul className='header-navigation'>
        <li>
          <NavLinkComponent to={'/'}>Home</NavLinkComponent>
        </li>
        <li>
          <NavLinkComponent to='/movies'>Movies</NavLinkComponent>
        </li>
      </ul>
  );
}

export default Header;
