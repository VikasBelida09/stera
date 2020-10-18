import React from "react";
import surface from "../../Assets/surface1.png";
import SubUsability from "../SubUsability/SubUsability";
import classes from "./Usability.module.css";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import image4 from "../../Assets/image4.png";
import top from "../../Assets/Group21.svg";
const email = `stexxxjia@gmail.com`;
function Usability() {
  return (
    <div className={classes.usabilityContainer} id="usability">
      <div className={classes.usabilityTop}>
        <img src={surface} alt="surface" className={classes.surface} />
        <span title="usability" className={classes.usabilityTitle}>
          Usability
        </span>
      </div>
      <div className={classes.usabilityMiddle}>
        <SubUsability
          title="Household"
          img={image1}
          description="Clothes, Slippers, School Bags, Tv Remote, Toys, Keys, Bottles, Masks, 
Mobile phones, Laptop and ipads etc"
        />
        <SubUsability
          title="Commercial"
          img={image2}
          description="Loose currency & Coins, Pen, Notebooks, Product before selling them, 
Tools before starting work in factory."
        />
        <SubUsability
          title="Medical"
          img={image3}
          description="PPE such as, N95 Mask, Eye Goggles, Face shield, Sanitized PPE can be refused,
Medical Equipment like Intubation tubes"
        />
        <SubUsability
          title="Salon & Spa"
          img={image4}
          description="Nail tools and other equipment, products before selling, sanitize and clean 
objects like towels, scissors"
        />
      </div>
      <div className={classes.usabilityBottom}>
        <a href="#FAQ">FAQS</a>
        <div className={classes.lastRow}>
          <h4>{`Email us: ${email}`}</h4>
          <a href="#top">
            <img src={top} alt="top" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Usability;
