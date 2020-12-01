import React from "react";
import stera from "../../Assets/steramain.png";
import stera1 from "../../Assets/stera1.png";
import stera2 from "../../Assets/stera2.png";
import stera3 from "../../Assets/stera3.png";
import stera4 from "../../Assets/stera4.png";
import ImageTextContainer from "../ImageTextContainer/ImageTextContainer";
import classes from "./MainFeaturesContainer.module.css";
import logo from "../../Assets/steralogo.png";
import { Link } from "react-router-dom";
import IconDisplayer from "../IconDisplayer/IconDisplayer";
import logo1 from "../../Assets/logo11.svg";
import logo2 from "../../Assets/svg2.svg";
import logo3 from "../../Assets/svguv.svg";
import logo4 from "../../Assets/svg3.svg";
import top from "../../Assets/Group21.svg";

const data = [
  {
    img: stera1,
    id: 1,
    title: `Ozone Light Sterilization, 
  Deep Deodorization`,
    description: `The air is oxidized by the ozone 
  lampin the in the machine to gene-
  rate low concentration of ozone 
  penetrates the cell membrane tissue
  to destroy the lipoprotein in the 
  membrane,changes the permeability 
  of the cell, causes the cell to lyse and
  die, and reaches the effect of 
  sterilization `,
  },
  {
    img: stera2,
    id: 2,
    title: `304 Stainless Steel Inner,
    All-round UV Disinfection`,
    description: `ensures every corner of the cabinet 
    can be irradiated to achieve true 
    sterilization without dead corners. 
    At the same time,resistant to corro-
    rsion, easy to clean and
    no dirt hidden.`,
  },
  {
    img: stera3,
    id: 3,
    title: `Sensitive Touch Control,
    Simple Operation`,
    description: `Eliminate tedious operations, 
    simply complexity touch the keys,
    at a glance, elderly can also easily 
    operate, making daily disinfection 
    more convenient and 
    worry free.`,
  },
  {
    img: stera4,
    id: 4,
    title: `Self Adjustable Drawers`,
    description: `Convenient to adjust the 
    way you you want to.`,
  },
];
function MainFeaturesContainer() {
  return (
    <div id="knowMoreTop">
      <div className={classes.mainFeaturesContainerHeader}>
        <img src={logo} alt="stera logo" />
        <Link to="/" className={classes.link}>{`< Back Home`}</Link>
      </div>
      <div className={classes.mainFeaturesContainerBanner}>
        <div className={classes.bannerContent}>
          <img src={logo} alt="logo" className={classes.bannerLogo} />
          <span className={classes.spanTitle}>
            Your <strong className={classes.blue}>360 degree protector</strong>{" "}
            from all viruses USFDA Approved
          </span>
        </div>
      </div>
      <div>
        <IconDisplayer
          img={logo1}
          description={`Compact and
          Portable`}
          color={"#707277"}
        />
        <IconDisplayer
          img={logo2}
          height={160}
          description={"UV Sterilization"}
          color={"#707277"}
        />
        <IconDisplayer
          img={logo3}
          height={160}
          description={"Easy to operate"}
          color={"#707277"}
        />
        <IconDisplayer
          img={logo4}
          height={160}
          description={"3 Working Modes"}
          color={"#707277"}
        />
      </div>
      <ImageTextContainer
        img={stera}
        key="main"
        title={`Small Size, Easy to Move`}
        description={`Round and compact appearance design, 
            with arc lines, makes the whole design 
            softer,smoother and lighter, easy to move, 
            allowing you to get aseptic day freely.`}
      />
      <div className={classes.poster}>
        <span className={classes.posterTitle}>{`UV Sterilization Technology,
Safer Scientific Disinfection`}</span>
        <p>{`Utilize an appropriate wavelength of UV light to destroy 
the molecular structure of DNA or RNA in cells of microg-
anisms, Effectively killing various bacteria that affect 
the family members.`}</p>
      </div>
      {data.map((imageText) => {
        return (
          <ImageTextContainer
            img={imageText.img}
            key={imageText.id}
            title={imageText.title}
            description={imageText.description}
          />
        );
      })}
      <a href="#knowMoreTop" className={classes.top}>
        <img src={top} alt="top" />
      </a>
    </div>
  );
}

export default MainFeaturesContainer;
