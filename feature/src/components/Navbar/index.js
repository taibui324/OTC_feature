import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  
} from './EditNavbar';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        </NavLink>
        <NavMenu>
          <NavLink to='/Video' activeStyle>
           Video
          </NavLink>
          <NavLink to='/Instagram' activeStyle>
            Instagram
          </NavLink>
        
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
