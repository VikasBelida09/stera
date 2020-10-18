import React from "react";
import classes from "./IconDisplayer.module.css";
function IconDisplayer({ img, description, height,width,ml }) {
  return (
    <div className={classes.iconContainer}>
        <img src={img} alt={description} style={height?{height:height,width:width, marginLeft:ml}:{}}/>
        <span title={description}>{description}</span>
    </div>
  );
}

export default IconDisplayer;
