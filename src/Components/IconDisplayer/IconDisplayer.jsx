import React from "react";
import classes from "./IconDisplayer.module.css";
function IconDisplayer({ img, description }) {
  return (
    <div className={classes.iconContainer}>
        <img src={img} alt={description} />
        <span title={description}>{description}</span>
    </div>
  );
}

export default IconDisplayer;
