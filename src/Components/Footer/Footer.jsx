import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerLeft}>
        <h4>Quick Links</h4>
      </div>
      <div className={classes.footerMiddle}>
        <div className={classes.footerMiddle1}>
          <a href="#aboutus">About us</a>
          <a href="#product">The Product</a>
          <a href="#features">Features</a>
        </div>
        <div className={classes.footerMiddle2}>
          <a href="#specifications">Specifications</a>
          <a href="#usability">Usability</a>
          <Link to="/faq">FAQS</Link>
        </div>
        <div className={classes.footerMiddle3}>
          <Link to="/contact">Contact us</Link>
          <a href="#query">Query</a>
        </div>
      </div>
      <div className={classes.footerRight}>
        <h4>Social Media :</h4>
        <div className={classes.footerRightIcons}>
          <FacebookIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
