import React, { Fragment } from "react";
import { Media } from "react-bootstrap";

import { FaRegBell, FaBars, FaTimes, FaRegClock } from "react-icons/fa";

import "./NotificationComponents.scss";

const NotificationComponents = () => {
  return (
    <Fragment>
      <div className="notification-list-wrapper">
        <ul className="list-unstyled notification-group--list">
          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user1.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>

          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user2.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>
          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user2.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>
          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user2.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>
          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user2.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>
          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user2.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>
          <Media as="li" className="notification-list--single-item">
            <img
              className="mr-2"
              src={require("../../assets/img/user/user2.jpg").default}
              alt="Generic placeholder"
              rounded="true"
            />
            <Media.Body>
              <summary className="notififcation-list-item-summary">
                <h6>Sarah Smith</h6>
                <p>
                  <span>
                    <FaRegClock></FaRegClock>
                  </span>
                  14 min ago
                </p>
                <p>please check your mail.</p>
              </summary>
            </Media.Body>
          </Media>
        </ul>
        <div className="notification-read--label">
          <a href="#">Read All Notifications</a>
        </div>
      </div>
    </Fragment>
  );
};

export default NotificationComponents;
