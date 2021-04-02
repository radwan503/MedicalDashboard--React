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
  ListGroup,
} from "react-bootstrap";

import { FaRegBell, FaBars, FaTimes } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
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
      <Navbar
        id="vaccine-navbar--top"
        className="container"
        bg="light"
        expand="lg"
      >
        <Container>
          <Navbar.Brand
            className="toggle-menu-icon"
            onClick={() => toggleShow(!show)}
          >
            <FaBars />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="vaccine-navbar-nav" />
          <Navbar.Collapse id="vaccine-navbar-nav">
            <Nav className="ml-auto">
             
              <Nav.Link href="#home"><MdSettings></MdSettings></Nav.Link>

              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  variant="success"
                  id="dropdown"
                  className="notification-bell"
                  data-toggle="dropdown"
                >
                  <FaRegBell />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right dropdown-menu--custom">
                  <NotificationComponents></NotificationComponents>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown  className="user-profile-dropdown" as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  variant="success"
                  id="dropdown"
                  data-toggle="dropdown"
                >
                  <img
                    className="user-profile-img"
                    src={require("../../assets/img/user/admin.jpg").default}
                  ></img>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right profile-dropdown-list dropdown-menu--custom">
                  <ListGroup as="ul">
                    <ListGroup.Item as="li" action href="#Profile">Profile</ListGroup.Item>
                    <ListGroup.Item as="li" action href="#Feedback">Feedback</ListGroup.Item>
                    <ListGroup.Item as="li" action href="#Help">Help</ListGroup.Item>
                    <ListGroup.Item as="li" action href="#Logout">Logout</ListGroup.Item>
                  </ListGroup>
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
