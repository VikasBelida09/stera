import React from "react";
import classes from "./Contact.module.css";
import logo from "../../Assets/steralogo.png";
import { Link, useLocation } from "react-router-dom";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
function Contact() {
  const { pathname } = useLocation();
  let path = pathname.substr(1);
  return (
    <div>
      <div className={classes.contactHeader}>
        <img src={logo} alt="stera logo" />
        <Link to="/" className={classes.link}>{`< Back Home`}</Link>
      </div>
      <div className={classes.breadCrumb}>
        <Link
          to="/contact"
          className={path === "contact" ? classes.active : classes.links}
        >
          Query
        </Link>
        <span className={classes.slash}>/</span>
        <Link
          to="/faq"
          className={path === "faq" ? classes.active : classes.links}
        >
          FAQS
        </Link>
      </div>
      {path==='contact'?<Form />:<>FAQS will be created tomorrow</>}
      <Footer />
    </div>
  );
}

export default Contact;
