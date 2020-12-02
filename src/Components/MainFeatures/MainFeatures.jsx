import React from "react";
import classes from "./MainFeatures.module.css";
import surface from "../../Assets/surface1.png";
import IconDisplayer from "../IconDisplayer/IconDisplayer";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import logo5 from "../../Assets/logo5.png";
import logo6 from "../../Assets/logo6.png";
import logo7 from "../../Assets/logo7.png";
import logo8 from "../../Assets/logo8.png";
import logo9 from "../../Assets/logo9.png";
import logo10 from "../../Assets/logo10.png";
function MainFeatures() {
  return (
    <div className={classes.mainFeaturesContainer} id="features">
      <div className={classes.border}></div>
      <div className={classes.mainFeaturesTop}>
        <h5>Main Features</h5>
        <img src={surface} alt="surface" />
      </div>
      <div className={classes.mainFeatures}>
        <IconDisplayer img={logo1} description={"100% Safe and Reliable"} />
        <IconDisplayer img={logo2} description={"One Touch UV-C Irradiation"} />
        <IconDisplayer img={logo3} description="Kills 99.9% of Bacteria" />
        <IconDisplayer
          img={logo4}
          description="360 Degree Surface Disinfection"
        />
        <IconDisplayer
          img={logo5}
          description="Built-in induction Night Light"
        />
        <IconDisplayer img={logo6} description="18l UV Sterilizer" />
        <IconDisplayer img={logo7} description="UV Light + Ozone Layer" />
        <IconDisplayer img={logo8} description="Air inflow Filtaration" />
        <IconDisplayer img={logo9} description="ABS + Stainless Steel" />
        <IconDisplayer img={logo10} description="4 working modes" />
      </div>
      <div style={{ marginTop: "5vh", height: "2vh" }}></div>
    </div>
  );
}

export default MainFeatures;
