import React from "react";
import classes from "./Navbar.module.css";
import logo from '../../Assets/steralogo.png'
function Navbar() {
  return (
    <div>
      <div className={classes.mainNav}>
          <div className={classes.mainNavLogo}>
            <img src={logo} alt="steralogo"/>
          </div>
          <div className={classes.mainNavLinks}>
            <a href="#product">About us</a>
            <a href="#features">Contact us</a>
          </div>
      </div>
      <div className={classes.navContainer}>
        <div className={classes.navLinks}>
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#specifications">Specifications</a>
          <a href="#usability">Usability</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
