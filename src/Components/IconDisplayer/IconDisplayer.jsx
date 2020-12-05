import React from "react";
import classes from "./IconDisplayer.module.css";
function IconDisplayer({ img, description, height, width, ml, color,textWidth,textMt }) {
  return (
    <div className={classes.iconContainer}>
      <img
        src={img}
        alt={description}
        style={height ? { height: height, width: width, marginLeft: ml } : {}}
      />
      <span
        title={description}
        style={
          color ? { color: color, fontSize: 23, fontFamily: "Segoe UI"} : width?{width:textWidth,marginTop:textMt}:{}
        }
      >
        {description}
      </span>
    </div>
  );
}

export default IconDisplayer;
