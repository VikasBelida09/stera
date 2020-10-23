import React from "react";
import classes from "./Knowmore.module.css";
import logo from "../../Assets/steralogo.png";
import { Link } from "react-router-dom";
import surface from "../../Assets/surface2.png";
import Footer from "../Footer/Footer";
import Divider from "../Divider/Divider";
function knowmore() {
  return (
    <div className={classes.knowMoreContainer}>
      <div className={classes.knowMoreHeader}>
        <img src={logo} alt="stera logo" />
        <Link to="/" className={classes.link}>{`< Back Home`}</Link>
      </div>
      <div className={classes.knowMoreBanner}>
        <div className={classes.surface}>
          <img src={surface} alt="surface" />
        </div>
        <div className={classes.bannerContent}>
          <img src={logo} alt="logo" className={classes.bannerLogo} />
          <span className={classes.spanTitle}>
            Kills <strong className={classes.blue}>99.9%</strong> of viruses
            including Corona Virus
          </span>
        </div>
      </div>
      <div className={classes.knowMoreContent}>
        <span className={classes.aboutUs}>About us</span>
        <div className={classes.container}>
          <div className={classes.header}>
            <p>
              What is<span className={classes.span}> UV</span> technology and{" "}
              <br /> why do we need it?
            </p>
          </div>
          <div className={classes.body}>
            <p className={classes.details}>
              The International Ultraviolet Association (IUVA) believes that UV
              disinfection technologies can play a role in a multiple barrier
              approach to reducing the transmission of the virus causing
              COVID-19, SARS-CoV-2, based on current disinfection data and
              empirical evidence. UV is a known disinfectant for air, water and
              surfaces that can help to mitigate the risk of acquiring an
              infection in contact with the COVID-19 virus when applied
              correctly
            </p>
            <p className={classes.details}>
              The IUVA has assembled leading experts from around the world to
              develop guidance on the effective use of UV technology, as a
              disinfection measure, to help reduce the transmission of COVID-19
              virus. Established in 1999, the IUVA is a nonprofit dedicated to
              the advancement of ultraviolet technologies to help address public
              health and environmental concerns
            </p>
            <p className={classes.questions}>
              Are UVC Disinfection Devices safe?
            </p>
            <p className={classes.details}>
              Like any disinfection system, UVC devices must be used properly to
              be safe.) They all produce varying amounts of UVC light in
              wavelengths of 200nm-280nm. This UVC light is much “stronger” than
              normal sunlight, and can cause a severe sunburn-like reaction to
              your skin. The target tissue in the eye would be the cornea
              (rather than the retina). The effect on the cornea is called
              photokeratitis, which is also known as welder’s flash or
              snow-blindness, is like a sunburn of the eye. It’s unlikely that
              any of the UVC light would penetrate through the cornea and then
              lens to reach the retina because of the short wavelength (i.e.
              high frequency).
            </p>
            <p className={classes.questions}>
              What does <span className={classes.span}>UV</span> disinfection
              Shield do?
            </p>
            <p className={classes.details}>
              The brand new UV Disinfection shield is here! It’s a portable
              disinfection cabinet That uses the UV disinfection and
              sterilization commonly used in the medical field that removes
              viruses from your everyday appliances. It comes packed with
              multiple features like 360 degree surface disinfection, touch
              operated, 100% reliable and safe, portable,easy to use and unlike
              others USFDA approved.
            </p>
          </div>
          <Link to="/faq" className={classes.link}>
            <span className={classes.aboutUs}>FAQS</span>
          </Link>
          <span className={classes.email}>Email us: stexxxjia@gmail.com</span>
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
}

export default knowmore;
