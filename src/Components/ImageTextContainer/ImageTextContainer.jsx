import React from "react";
import classes from "./ImageTextContainer.module.css";

function ImageTextContainer({ img, title, description }) {
  return (
    <div className={classes.ImageTextContainer}>
      <img src={img} alt="" />
      <span className={classes.ImageTexttitle}>{title}</span>
      <p className={classes.ImageTextDescription}>{description}</p>
    </div>
  );
}

export default ImageTextContainer;
