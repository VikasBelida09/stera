import React from "react";
import classes from "./SubUsability.module.css";
function SubUsability({
  img,
  title,
  description,
  imgStyles,
  anotherTitle,
  anotherDescription,
  smallObjects,
}) {
  return (
    <div className={classes.subUsability}>
      <div className={classes.image}>
        <img src={img} alt={title} style={imgStyles} />
      </div>
      <div className={classes.descriptionContainer}>
        <h5>{title}</h5>
        <p
          style={{
            marginBottom: "0.2vh",
            color: "#85888d",
            fontWeight: "bolder",
          }}
        >
          {smallObjects}
        </p>
        <p>{description}</p>
        <p
          style={{
            marginBottom: "0.2vh",
            color: "#85888d",
            fontWeight: "bolder",
          }}
        >
          {anotherTitle}
        </p>
        <p>{anotherDescription}</p>
      </div>
    </div>
  );
}

export default SubUsability;
