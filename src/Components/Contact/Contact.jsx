import React, { useState } from "react";
import classes from "./Contact.module.css";
import logo from "../../Assets/steralogo.png";
import { Link, useLocation } from "react-router-dom";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import { qa } from "../../data/data";
import Divider from "../Divider/Divider";
function Contact() {
  const { pathname } = useLocation();
  let path = pathname.substr(1);
  const [hide, setHide] = useState(false);
  const Qa = qa.slice(0, 3).map((item) => {
    return (
      <QuestionAnswer
        key={item.question}
        question={item.question}
        answer1={item.answer1}
        answer2={item?.answer2}
        answer3={item?.answer3}
        answer4={item?.answer4}
        answer5={item?.answer5}
      />
    );
  });
  const QaFull = qa.slice(4).map((item) => {
    return (
      <QuestionAnswer
        key={item.question}
        question={item.question}
        answer1={item.answer1}
        answer2={item?.answer2}
        answer3={item?.answer3}
        answer4={item?.answer4}
        answer5={item?.answer5}
      />
    );
  });
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
      {path === "contact" ? (
        <Form />
        // <iframe title="google form" src={`https://docs.google.com/forms/d/e/1FAIpQLSfXj2csDUO6DjXGeOAz0taL_iTUR85UuhmdkJvdFIjwMUsQCQ/viewform?usp=sf_link`} frameborder="0"  width="650px"></iframe>
      ) : (
        <>
          {Qa}
          {!hide && (
            <span
              title="seemore"
              className={classes.seeMore}
              onClick={() => setHide(true)}
            >{`See More >`}</span>
          )}
          {hide && QaFull}
          <p className={classes.email}>Email us: stexxxjia@gmail.com</p>
        </>
      )}
      <Divider />
      <Footer />
    </div>
  );
}

export default Contact;
