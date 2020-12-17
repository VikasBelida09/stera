import React, { useEffect, useRef } from "react";
import classes from "./Knowmore.module.css";
import logo from "../../Assets/steralogo.png";
import { Link, useHistory } from "react-router-dom";
import surface from "../../Assets/surface2.png";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";
function Knowmore() {
  const topDivRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    topDivRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  return (
    <div className={classes.knowMoreContainer} ref={topDivRef}>
      <div className={classes.knowMoreHeader}>
        <img src={logo} alt="stera logo" onClick={() => history.push("/")} />
        <Link to="/" className={classes.link}>{`< Back Home`}</Link>
      </div>
      <div className={classes.knowMoreBanner}>
        <div className={classes.surface}>
          <img src={surface} alt="surface" />
        </div>
        <div className={classes.bannerContent}>
          <img src={logo} alt="logo" className={classes.bannerLogo} />
          <span className={classes.spanTitle}>
            Kills <strong className={classes.blue}>Corona </strong> 
            and all other pathogens
          </span>
        </div>
      </div>
      <div className={classes.knowMoreContent}>
        <span className={classes.aboutUs}>About us</span>
        <div className={classes.container}>
          <div className={classes.header}></div>
          <div className={classes.body}>
            <p className={classes.questions}>About Stera</p>
            <p className={classes.details}>
              Stera, a brand that has evolved to revolutionize how a common
              individual thinks of sanitization and disinfection. Stera is a
              group of individuals with an extraordinarily strong pedigree in
              pharmaceutical related research and development for the last
              decades.
            </p>
            <p className={classes.details}>
              Stera is not a marketing company but a research and development
              company who believes in building the real efficacious products and
              not on random marketing gimmicks. We have a series of products in
              our pipeline that will revolutionize the entire disinfection
              segment.
            </p>
            <p className={classes.questions}>
              About Stera UV Disinfection Shield
            </p>
            <p className={classes.details}>
              We know that we all will shield ourselves better if we provide a
              proper shield for the daily use accessories. That is how the idea
              of UV disinfection shield evolved. A great deal of care and
              research were put into the designing of it.
            </p>
            <p className={classes.details}>
              Stera UV Disinfection Shield is a disinfection device, which is
              built with smarter chemistry to sanitise and disinfect all our
              small to medium sized personal possessions, fruits &, groceries,
              baby care items etc from all types of viruses and pathogens, in a
              matter of just 3-5 minutes.
            </p>
            <p className={classes.questions}>
              How does Stera UV Disinfection Shield works?
            </p>
            <p className={classes.details}>
              Stera UV disinfection shield uses the shortest wavelength of UV
              light i.e. UV-C light to break apart germ DNA, leaving it unable
              to function or reproduce. Stera UV shield can even neutralize
              “superbugs” that have developed a resistance to antibiotics. 
            </p>
            <p className={classes.details}>
              Stera UVC Disinfection Shield box uses strategically positioned
              reflectors to reflect UVC radiation on all sides the object. It
              can eradicate the most powerful and stubborn viruses in 3-5
              minutes, effectively being your 360-degree shield for a
              hygienically pure experience.
            </p>
            <p className={classes.questions}>Certifications</p>
            <p className={classes.details}>
              Stera UVC Disinfection Shield has been tested and certified by
              NABL & USFDA inspected laboratory with one of the most stringent
              testing protocols.
            </p>
            <p className={classes.questions} style={{fontSize:'15px', marginTop:'20px'}}>
              Stera disinfection shield is ISO 15858 : 2016 and CE Certified.{" "}
            </p>
          </div>
          <Link to="/faq" className={classes.link}>
            <span className={classes.aboutUs}>FAQS</span>
          </Link>
          <span className={classes.email}>
            For any queries: support@steracare.com
          </span>
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}

export default Knowmore;