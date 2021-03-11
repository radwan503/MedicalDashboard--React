import React, { Fragment, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Item,
  Divider,
  Button,
  Dropdown,
  Toggle,
  Menu,
  Container,
} from "react-bootstrap";

import { FaRegBell, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import data from "../../Data/NotificationData";
import "./Header.scss";
import NotificationComponents from "../NotificationComponents/NotificationComponents";

const Header = () => {
  const [show, toggleShow] = React.useState(false);
  return (
    <Fragment>
      {show && (
        <div className="sider-bar--small-device">
          <Button
            variant="warning"
            type="button"
            className="siderbar__show__hide"
            onClick={() => toggleShow(!show)}
          >
            <FaTimes></FaTimes>
          </Button>
          <Sidebar></Sidebar>
        </div>
      )}
      <Navbar className="container" bg="light" expand="lg">
        <Container>
          <Navbar.Brand
            className="toggle-menu-icon"
            onClick={() => toggleShow(!show)}
          >
            <FaBars />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  variant="success"
                  id="dropdown"
                  data-toggle="dropdown"
                >
                  <FaRegBell />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                  <NotificationComponents></NotificationComponents>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
