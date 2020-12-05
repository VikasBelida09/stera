import React from "react";
import classes from "./Info.module.css";
import surface2 from "../../Assets/surface2.png";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import IconDisplayer from "../IconDisplayer/IconDisplayer";
import facebook from "../../Assets/facebook1.svg";
import insta from "../../Assets/instagram1.svg";
import linkedin from "../../Assets/linkedin1.svg";
function Info() {
  return (
    <div className={classes.infoContainer} id="top">
      <div className={classes.infoBackContainer}>
        <img src={surface2} alt="surface2" className={classes.surface1} />
      </div>
      <div className={classes.infoFrontContainer}>
        <div className={classes.infoInner}>
          <span title="UVD" className={classes.title}>
            <strong className={classes.uv}>UV</strong> Disinfection Shield
          </span>
          <span className={classes.miniTitle}>Science that protect</span>
          <a href="#product" className={classes.buyBtn}>
            BUY NOW
          </a>
          <div className={classes.features}>
            <IconDisplayer
              img={logo1}
              description={"100% Safe and Reliable"}
              height={80}
              width={80}
              ml={"1vh"}
            />
            <IconDisplayer
              img={logo2}
              description={"One Touch UV-C Irradiation"}
              height={80}
              width={80}
              ml={"1vh"}
            />
            <IconDisplayer
              img={logo3}
              description="Kills 99.9% of Bacteria"
              height={80}
              width={80}
              ml={"1vh"}
            />
            <IconDisplayer
              img={logo4}
              description="360 Degree Surface Disinfection"
              height={80}
              width={80}
              ml={"1vh"}
            />
          </div>
          <span title="kills" className={classes.miniBoldTitle}>
            Kills <strong className={classes.uv}>99.9%</strong> of viruses
            including Corona Virus
          </span>
          <div className={classes.infoFooter}>
            <span className={classes.bottomTitle}>
              USFDA approved,{" "}
              <strong className={classes.uv}>Your 360 degree protector</strong>{" "}
              from all viruses
            </span>
            <div className={classes.linksToSocial}>
              <a
                href="https://www.facebook.com/Stera-104627901503865"
                className={classes.iconLinks}
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/steracare/"
                className={classes.iconLinks}
              >
                <img src={insta} alt="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/company/steracare/"
                className={classes.iconLinks}
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mobileView}>
        <div className={classes.textBtnContainer}>
          <span title="UVD" className={classes.title}>
            <strong className={classes.uv}>UV</strong> Disinfection Shield
          </span>
          <a href="#product" className={classes.buyBtn}>
            BUY NOW
          </a>
        </div>
        <span className={classes.miniTitle}>Science that protect</span>
        <span title="kills" className={classes.miniBoldTitle}>
            Kills <strong className={classes.uv}> 99.9%</strong> of viruses
            including Corona Virus
          </span>
        <div className={classes.features}>
          <IconDisplayer
            img={logo1}
            description={"100% Safe and Reliable"}
            height={100}
            width={80}
            ml={"1vh"}
            textWidth={120}
            textMt={"-3vh"}
          />
          <IconDisplayer
            img={logo2}
            description={"One Touch UV-C Irradiation"}
            height={100}
            width={80}
            ml={"1vh"}
            textWidth={120}
            textMt={"-3vh"}
          />
          <IconDisplayer
            img={logo3}
            description="Kills 99.9% of Bacteria"
            height={100}
            width={80}
            ml={"1vh"}
            textWidth={120}
            textMt={"-3vh"}
          />
          <IconDisplayer
            img={logo4}
            description="360 Degree Surface Disinfection"
            height={100}
            width={100}
            ml={"1vh"}
            textWidth={120}
            textMt={"-3vh"}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
