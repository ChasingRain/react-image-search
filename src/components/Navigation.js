import React from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import {
  NavLink
} from 'react-router-dom';
import Search from './Search';

const Navigation = () => (
  <Navbar className="navbar-fixed-top">
    <NavLink to='/'>
      <Nav>
      Image Search
      </Nav>
    </NavLink>
    <Search />
  </Navbar>

);

export default Navigation;
