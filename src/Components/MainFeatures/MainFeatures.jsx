import React from "react";
import classes from "./MainFeatures.module.css";
import surface from "../../Assets/surface1.png";
import IconDisplayer from "../IconDisplayer/IconDisplayer";
import { Link } from "react-router-dom";
import { mainFeaturesIcons } from "../../data/data";
function MainFeatures() {
  return (
    <div className={classes.mainFeaturesContainer} id="features">
      <div className={classes.border}></div>
      <div className={classes.mainFeaturesTop}>
        <h5>Main Features</h5>
        <img src={surface} alt="surface" />
      </div>
      <div className={classes.mainFeatures}>
        {mainFeaturesIcons.map((mainFeatureIcon) => (
          <IconDisplayer
            key={mainFeatureIcon.id}
            img={mainFeatureIcon.img}
            description={mainFeatureIcon.description}
          />
        ))}
        <Link to="/aboutFeatures" className={classes.hide}>
          <button type="button" className={classes.knowMoreBtn}>
            Know more
          </button>
        </Link>
      </div>
      <div style={{ marginTop: "5vh", height: "2vh" }}></div>
    </div>
  );
}

export default MainFeatures;
