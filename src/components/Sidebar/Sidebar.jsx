import React, { useState, useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  useAccordionToggle,
  AccordionContext,
  Button,
  Image,
} from "react-bootstrap";
import './Sidebar.scss';
import * as FaIcons from 'react-icons/fa';


function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;
  return (
    <button
      type="button"
      variant="link"
      className="menu__item px-2 py-2 border-0"
      style={{ backgroundColor: isCurrentEventKey ? "#9eafdd" : "white" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Sidebar = () => {
  return (
    <Fragment>
      <nav id="sidebar">
        <a className="sidebar--header" href="#">
          <div className="siderbar-header__logo">
            <img className="sidebar--logo__icon" src={require('../../assets/img/logo/logo.png').default}></img>
          </div>
          <div className="siderbar--logo_title">
            <h3>Vaccine</h3>
          </div>
        </a>

        <ul className="sidebar--menu">
          <li className="sidebar--menu-child">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0">
                <NavLink to="/"><span><FaIcons.FaHome></FaIcons.FaHome></span>Dashboard</NavLink>
              </ContextAwareToggle>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaClipboardList></FaIcons.FaClipboardList></span>Appoinments</ContextAwareToggle>
              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="/view-appoinment">View Appoinment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/book-appoinment">Book Appoinment</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaUserMd></FaIcons.FaUserMd></span>Doctors</ContextAwareToggle>

              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="/attendence-link">Attendence Claim</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaUserInjured></FaIcons.FaUserInjured></span>Patients</ContextAwareToggle>

              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="/attendence-link">Leave Application</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0"><span><FaIcons.FaMoneyBillAlt/> </span>Payment</ContextAwareToggle>

              <Accordion.Collapse eventKey="0">
                <Accordion className="px-0 py-0">
                  <ContextAwareToggle eventKey="1">Team</ContextAwareToggle>

                  <Accordion.Collapse eventKey="1">
                    <ul className="sidebar__submenu">
                      <li>
                        <NavLink to="/probation-period">
                          Probation Period
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/yearly-performance">
                          Yearly Performance
                        </NavLink>
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
              </Accordion.Collapse>
            </Accordion>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
