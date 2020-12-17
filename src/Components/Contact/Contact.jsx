import React, { useEffect, useRef, useState } from "react";
import classes from "./Contact.module.css";
import logo from "../../Assets/steralogo.png";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import { qa } from "../../data/data";
import Divider from "../Divider/Divider";
function Contact() {
  const history = useHistory();
  const containerRef = useRef(null);
  const { pathname } = useLocation();
  let path = pathname.substr(1);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    containerRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, []);
  const Qa = qa.slice(0, 4).map((item) => {
    return (
      <QuestionAnswer
        key={item.question}
        question={item.question}
        answer1={item.answer1}
        answer2={item?.answer2}
        answer3={item?.answer3}
        answer4={item?.answer4}
        link4={item?.link}
        answer5={item?.answer5}
        answer6={item?.answer6}
      />
    );
  });
  const QaFull = qa.slice(5).map((item) => {
    return (
      <QuestionAnswer
        key={item.question}
        question={item.question}
        answer1={item.answer1}
        answer2={item?.answer2}
        answer3={item?.answer3}
        answer4={item?.answer4}
        link4={item?.link}
        answer5={item?.answer5}
        answer6={item?.answer6}
      />
    );
  });
  return (
    <div className={classes.contact} ref={containerRef}>
      <div className={classes.contactHeader}>
        <img src={logo} alt="stera logo" onClick={() => history.push("/")} />
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
        <iframe
          title="google form"
          src={`https://docs.google.com/forms/d/e/1FAIpQLSfXj2csDUO6DjXGeOAz0taL_iTUR85UuhmdkJvdFIjwMUsQCQ/viewform?embedded=true`}
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className={classes.googleForm}
          border="0"
          style={{ overflowX: "hidden" }}
        >
          Loading...
        </iframe>
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
          <p className={classes.email}>For any queries: support@steracare.com</p>
        </>
      )}
      <Divider />
      <Footer />
    </div>
  );
}

export default Contact;
