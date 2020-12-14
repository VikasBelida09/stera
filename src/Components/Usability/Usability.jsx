import React from "react";
import surface from "../../Assets/surface1.png";
import SubUsability from "../SubUsability/SubUsability";
import classes from "./Usability.module.css";
import top from "../../Assets/Group21.svg";
import { subUsabilityImages } from "../../data/data";
import { Link } from 'react-router-dom'
const email = `support@steracare.com`;
function Usability() {
  return (
    <div className={classes.usabilityContainer} id="usability">
      <div className={classes.usabilityTop}>
        <img src={surface} alt="surface" className={classes.surface} />
        <span title="usability" className={classes.usabilityTitle}>
          Usability
        </span>
      </div>
      <div className={classes.usabilityMiddle}>
        {subUsabilityImages.map((item) => (
          <SubUsability
            key={item.id}
            title={item.title}
            img={item.img}
            description={item.description}
            imgStyles={item.imgStyles}
            anotherDescription={item.anotherDescription}
            anotherTitle={item.anotherTitle}
            smallObjects={item.smallObjects}
          />
        ))}
      </div>
      <div className={classes.usabilityBottom}>
        <Link to="/faq">FAQS</Link>
        <div className={classes.lastRow}>
          <h4>{`Any queries: ${email}`}</h4>
          <a href="#top">
            <img src={top} alt="top" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Usability;
