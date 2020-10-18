import React from "react";
import classes from "./Info.module.css";
import surface2 from "../../Assets/surface2.png";
import logo1 from "../../Assets/logo1.png";
import logo2 from "../../Assets/logo2.png";
import logo3 from "../../Assets/logo3.png";
import logo4 from "../../Assets/logo4.png";
import IconDisplayer from "../IconDisplayer/IconDisplayer";
import facebook from '../../Assets/facebook.svg'
import insta from '../../Assets/instagram.svg';
import linkedin from '../../Assets/linkedin.svg'
function Info() {
  return (
    <div className={classes.infoContainer}>
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
             <span className={classes.bottomTitle}>USFDA approved, <strong className={classes.uv}>Your 360 degree protector</strong> from all viruses</span>
             <div className={classes.linksToSocial}>
                 <img src={facebook} alt=""/>
                 <img src={insta} alt=""/>
                 <img src={linkedin} alt=""/>
             </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
