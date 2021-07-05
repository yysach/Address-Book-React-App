import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={{backgroundColor:'var(--first-color)'}} dark expand="md">
        <Link to="/" className="navbar-brand">Reactstrap</Link>
        <NavbarToggler onClick={()=>toggle()} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/login" className="nav-link">LogIn</Link>
            </NavItem>
            <NavItem>
            <Link to="/register" className="nav-link">SignUp</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;