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
            About Stera <strong className={classes.uv}>UV</strong> Disinfection
            Shield
          </span>
          <h4 className={classes.infoQuestion}>About Stera</h4>
          <div className={classes.answerContainer}>
            <p
              className={classes.answer}
            >{`Stera, a brand that has evolved to revolutionize how a common individual thinks of sanitization and disinfection. Stera is a group of individuals with an extraordinarily strong pedigree in pharmaceutical related research and development for the last decades.
            `}</p>
            <p
              className={classes.answer}
            >{`Stera is not a marketing company but a research and development company who believes in building the real efficacious products and not on random marketing gimmicks. We have a series of products in our pipeline that will revolutionize the entire disinfection segment.`}</p>
          </div>
          <div className={classes.aboutUVContainer}>
            <span title="aboutuv" className={classes.aboutUV}>
              About stera<strong className={classes.uv}>UV</strong> Disinfection
              Shield
            </span>
            <p
              className={classes.aboutUVInfo}
            >{`We know that we all will shield ourselves better if we provide a proper shield for the daily use accessories. That is how the idea of UV disinfection shield evolved. A great deal of care and research were put into the designing of it.
                      Stera UV Disinfection Shield is a disinfection device, which is built with smarter chemistry to sanitise and disinfect all our small to medium sized personal possessions, fruits &, groceries, baby care items etc from all types of viruses and pathogens, in a matter of just 3-5 minutes.
            `}</p>
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
