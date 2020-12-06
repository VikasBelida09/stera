import React from "react";
import classes from "./ImageTextContainer.module.css";

function ImageTextContainer({
  img,
  title,
  description,
  imgStyles = {},
  imgTextContainerStyles={}
}) {
  return (
    <div className={classes.ImageTextContainer} style={imgTextContainerStyles}>
      <img src={img} alt="" style={imgStyles} />
      <span className={classes.ImageTexttitle}>{title}</span>
      <p className={classes.ImageTextDescription}>{description}</p>
    </div>
  );
}

export default ImageTextContainer;
