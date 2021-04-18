import React from "react";
import PropTypes from "prop-types";
import "./card.css";

export const Card = ({ hoverable, title, description, cover, ...props }) => {
  const mode = hoverable ? "storybook-button--hoverable" : "";
  return (
    <div className={["storybook-card", mode].join(" ")}>
      <div>
        <img alt="example" src={cover} />
      </div>
      <div>{/* <div>{title}</div>
        <div>{description}</div> */}</div>
    </div>
  );
};

Card.propTypes = {
  hoverable: PropTypes.bool,

  title: PropTypes.string,

  description: PropTypes.string,

  cover: PropTypes.string,
};

Card.defaultProps = {
  hoverable: true,
  title: "This is a title",
  description: "This is a description",
  cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
};
