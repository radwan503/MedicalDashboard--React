import React, { Fragment,useState } from "react";
import { Navbar,Nav,NavDropdown,Item,Divider } from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar";
import './Header.scss';


const Header = () => {
    const [show, toggleShow] = React.useState(false);
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={() => toggleShow(!show)}> <FaIcons.FaBars  /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {show && <div><Sidebar></Sidebar></div>}
    </Fragment>
  );
};

export default Header;
