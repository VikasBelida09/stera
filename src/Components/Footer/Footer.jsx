import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
function Footer() {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerLeft}>
        <h4>Quick Links</h4>
      </div>
      <div className={classes.footerMiddle}>
        <div className={classes.footerMiddle1}>
          <HLink
            to={{
              pathname: "/",
              hash: "#aboutus",
            }}
          >
            About us
          </HLink>
          <HLink
            to={{
              pathname: "/",
              hash: "#product",
            }}
          >
            The Product
          </HLink>
          <HLink
            to={{
              pathname: "/",
              hash: "#features",
            }}
          >
            Features
          </HLink>
        </div>
        <div className={classes.footerMiddle2}>
          <HLink
            to={{
              pathname: "/",
              hash: "#specifications",
            }}
          >
            Specifications
          </HLink>
          <HLink
            to={{
              pathname: "/",
              hash: "#usability",
            }}
          >
            Usability
          </HLink>
          <Link to="/faq">FAQS</Link>
        </div>
        <div className={classes.footerMiddle3}>
          <Link to="/contact">Contact us</Link>
          <Link to="/contact">Query</Link>
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
