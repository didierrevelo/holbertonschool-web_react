import React from "react";
import propTypes from "prop-types"

function NotificationItem({ type, value, html }) {
  let Item;

  if (value) {
    Item = <li data-notification-type={type}>{value}</li>;
  } else {
    Item = (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  }

  return Item;
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string
    }), 
};

export default NotificationItem;
