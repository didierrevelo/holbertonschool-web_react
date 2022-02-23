import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import propTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: 20,
            }}
            aria-label="close"
          >
            <img src={closeIcon} alt="close-icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
          {listNotifications.length === 0 && (
              <NotificationItem value="No new notification for now" />
            )}

            {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: propTypes.bool,
  listNotifications: propTypes.arrayOf(NotificationItemShape),
};

export default Notifications;