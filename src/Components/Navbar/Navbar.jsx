import React, { useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../Assets/steralogo.png";
import hamburger from "../../Assets/hamburger.svg";
import { Link } from "react-router-dom";
import cx from "classnames";
import NavigationItem from "../NavigationItem/NavigationItem";
import FacebookIcon from "../../Assets/facebook.svg";
import InstagramIcon from "../../Assets/instagram.svg";
import LinkedInIcon from "../../Assets/linkedin.svg";
function Navbar({ children }) {
  const [hamBurgerIconPressed, setHamBurgerIconPressed] = useState(false);
  const setHamIconPressedValue = () => {
    setHamBurgerIconPressed(!hamBurgerIconPressed);
  };
  return (
    <div className={classes.navBarcontainer}>
      <div className={classes.mainNav}>
        <div className={classes.mainNavLogo}>
          <img src={logo} alt="steralogo" />
        </div>
        {/* <div className={classes.mainNavLinks}>
          <a href="#aboutus">About us</a>
          <Link to="/contact">Contact us</Link>
        </div> */}
        <div className={classes.hamburger}>
          <img
            src={hamburger}
            alt="ham burger"
            onClick={setHamIconPressedValue}
          />
        </div>
      </div>
      <div
        className={
          hamBurgerIconPressed
            ? cx(classes.sideDrawer, classes.open)
            : cx(classes.sideDrawer, classes.close)
        }
      >
        <div className={classes.navItemContainer}>
          <NavigationItem name="About us" url="#aboutus" />
          <NavigationItem name="Contact us" url="/contact" />
          <NavigationItem name="Product" url="#product" />
          <NavigationItem name="Features" url="#features" />
          <NavigationItem name="Specifications" url="#specifications" />
          <NavigationItem name="Usability" url="#usability" />
          <div className={classes.Icons}>
            <a
              href="https://www.facebook.com/Stera-104627901503865"
              className={classes.iconLinks}
            >
              <img src={FacebookIcon} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/steracare/"
              className={classes.iconLinks}
            >
              <img src={InstagramIcon} alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/company/steracare/"
              className={classes.iconLinks}
            >
              <img src={LinkedInIcon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.navContainer}>
        <div className={classes.navLinks}>
          <a href="#aboutus">About us</a>
          <Link to="/contact">Contact us</Link>
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#specifications">Specifications</a>
          <a href="#usability">Usability</a>
        </div>
      </div>
      <main className={classes.child}>{children}</main>
    </div>
  );
}

export default Navbar;
