import React from "react";
import classes from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
import cx from "classnames";
function Footer() {
  return (
    <>
      <div className={classes.footerContainer}>
        <div className={classes.footerLeft}>
          <h4>Quick Links</h4>
        </div>
        <div className={cx(classes.footerMiddle, classes.deskView)}>
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
          </div>
          <div className={classes.footerMiddle3}>
            <HLink
              to={{
                pathname: "/",
                hash: "#features",
              }}
            >
              Features
            </HLink>
            <Link to="/faq">FAQS</Link>
          </div>
          <div className={classes.footerMiddle4}>
            <Link to="/contact">Contact us</Link>
            <Link to="/contact">Query</Link>
          </div>
        </div>
        <div className={cx(classes.footerMiddle, classes.mobView)}>
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
            <a href="https://www.facebook.com/Stera-104627901503865">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/steracare/">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/steracare/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={cx(classes.developedByContainer, classes.deskView)}>
        <span>Developed By: Akko Worldwide Communication</span>
      </div>
      <div className={cx(classes.developedByContainer, classes.mobView)}>
        <span>Developed By :</span>
        <span>Akko Worldwide Communication</span>
      </div>
    </>
  );
}

export default Footer;
