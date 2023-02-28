import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/search' activeStyle>
            Search
          </NavLink>
          <NavLink to='/currentBookings' activeStyle>
            Current Bookings
          </NavLink>
          <NavLink to='/account' activeStyle>
            Account Settings
          </NavLink>
          <NavLink to='/database' activeStyle>
            Manage Database
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/logout'>Log Out</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;