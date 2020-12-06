import React from "react";
import classes from "./Aboutus.module.css";
import { Link } from "react-router-dom";
function Aboutus() {
  return (
    <div className={classes.aboutUsContianer} id="aboutus">
      <div className={classes.divider}>
        <span>About us</span>
      </div>
      <div className={classes.miniDivider}></div>
      <div className={classes.aboutInfoContainer}>
        <div className={classes.aboutInfoInnerContainer}>
          <span title="about uv" className={classes.infoHeaderTitle}>
            About <strong className={classes.uv}>UV</strong> Disinfection Shield
            &
          </span>
          <span title="uv tech" className={classes.infoHeaderTitle}>
            UV technology
          </span>
          <h4 className={classes.infoQuestion}>What is UV technology?</h4>
          <div className={classes.answerContainer}>
            <p
              className={classes.answer}
            >{`UV disinfection technology applies as a multiple barrier 
approach to reducing the transmission of virus causing 
COVID-19, SARSCoV-2 and more.`}</p>
            <p
              className={classes.answer}
            >{`UV is a known disinfectant for water, air and surfaces that can help 
to mitigate the risk of acquiring an infection with the 
COVID-19 virus when applied correctly.`}</p>
          </div>
          <div className={classes.aboutUVContainer}>
            <span title="aboutuv" className={classes.aboutUV}>
              About <strong className={classes.uv}>UV</strong> Disinfection
              Shield
            </span>
            <p
              className={classes.aboutUVInfo}
            >{`The brand new UV Disinfection shield is here! It’s a portable
disinfection cabinet That uses the UV disinfection and sterilization`}</p>
          </div>
        </div>
        <Link to="/knowMore">
          <button type="button" className={classes.knowMoreBtn}>
            Know more
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Aboutus;
