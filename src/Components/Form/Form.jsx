import React, { useState } from "react";
import classes from "./Form.module.css";
const initialFormState = {
  name: "",
  phone: "",
  email: "",
  query: "",
  city: "",
};
function Form() {
  const [formState, setFormState] = useState(initialFormState);
  const [visible, setVisible] = useState(false);
  const handleChange = (e, name) => {
    setFormState({
      ...formState,
      [name]: e.target.value,
    });
  };
  const onSubmit = () => {
    setVisible(true);
    setTimeout(() => {
      setFormState(initialFormState);
      setVisible(false);
    }, 5000);
  };
  return (
    <div className={classes.container}>
      <p className={classes.para}>Call us: 8088954323</p>
      <p className={classes.para}>Email us: sales@steracare.com</p>
      <p className={classes.para1}>
        Let us know your requirement and we will get in touch with you.
      </p>
      <div className={classes.formContainer}>
        <div className={classes.input}>
          <input
            type="text"
            placeholder="Name"
            value={formState.name}
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div className={classes.input}>
          <input
            type="text"
            placeholder="Phone Number"
            value={formState.phone}
            onChange={(e) => handleChange(e, "phone")}
          />
        </div>
        <div className={classes.input}>
          <input
            type="text"
            placeholder="Email"
            value={formState.email}
            onChange={(e) => handleChange(e, "email")}
          />
        </div>
        <div className={classes.input}>
          <input
            type="text"
            placeholder="City"
            value={formState.city}
            onChange={(e) => handleChange(e, "city")}
          />
        </div>
        <div className={classes.input}>
          <textarea
            type="text"
            placeholder="Query"
            value={formState.query}
            onChange={(e) => handleChange(e, "query")}
          />
        </div>
        <span
          className={classes.sentQuery}
          style={
            visible ? { display: "" } : { display: "none", marginRight: "5vw" }
          }
        >
          Your Query has been sent!
        </span>
        <button
          type="button"
          className={classes.submit}
          onClick={onSubmit}
          style={visible ? {} : {marginLeft: "25vw"}}
        >
          submit
        </button>
      </div>
      <p className={classes.email}>Email us: stexxxjia@gmail.com</p>
    </div>
  );
}

export default Form;
