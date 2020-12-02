import React from "react";
import classes from "./ImageTextContainer.module.css";

function ImageTextContainer({ img, title, description, paddingLeft }) {
  return (
    <div
      className={classes.ImageTextContainer}
      style={paddingLeft ? { paddingLeft: 0, paddingRight: 0 } : {}}
    >
      <img src={img} alt="" />
      <span className={classes.ImageTexttitle}>{title}</span>
      <p className={classes.ImageTextDescription}>{description}</p>
    </div>
  );
}

export default ImageTextContainer;
