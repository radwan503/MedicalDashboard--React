import React, { useState, useContext, Fragment } from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  useAccordionToggle,
  AccordionContext,
  Button,
} from "react-bootstrap";
import './Sidebar.scss';


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
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
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
        <div className="sidebar--header">
          <h3>HRM</h3>
        </div>

        <ul className="sidebar--menu">
          <li className="sidebar--menu-child">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </ContextAwareToggle>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0">Employee</ContextAwareToggle>
              <Accordion.Collapse eventKey="0">
                <ul className="sidebar__submenu">
                  <li>
                    <NavLink to="/dashboard">Enroll</NavLink>
                  </li>
                  <li>
                    <NavLink to="/search">Search</NavLink>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </li>

          <li className="">
            <Accordion className="px-0 py-0">
              <ContextAwareToggle eventKey="0">Attendence</ContextAwareToggle>

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
              <ContextAwareToggle eventKey="0">Leave</ContextAwareToggle>

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
              <ContextAwareToggle eventKey="0">Pms</ContextAwareToggle>

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
