import React from "react";
import stera from "../../Assets/steramain.png";
import ImageTextContainer from "../ImageTextContainer/ImageTextContainer";
import classes from "./MainFeaturesContainer.module.css";
import logo from "../../Assets/steralogo.png";
import svg1 from "../../Assets/makeup.svg";
import svg2 from "../../Assets/baby-cutlery.svg";
import svg3 from "../../Assets/feeding-bottle.svg";
import { Link } from "react-router-dom";
import IconDisplayer from "../IconDisplayer/IconDisplayer";
import top from "../../Assets/Group21.svg";
import { data, mainContainerIcons } from "../../data/data";
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
        {mainContainerIcons.map((icon) => (
          <IconDisplayer {...icon} />
        ))}
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
      <div className={classes.svgContainer}>
        <div>
          <div className={classes.ellipseBorder}>
            <img src={svg1} alt="svg1" />
          </div>
          <p className={classes.pDescription}>Beauty Care</p>
        </div>
        <div>
          <div className={classes.ellipseBorder1}>
            <img src={svg2} alt="svg2" />
          </div>
          <p className={classes.pDescription}>{`Daily
tableware`}</p>
        </div>
        <div>
          <div className={classes.ellipseBorder}>
            <img src={svg3} alt="svg3" />
          </div>
          <p className={classes.pDescription}>{`Children's 
Product`}</p>
        </div>
      </div>
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
            paddingLeft={true}
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
