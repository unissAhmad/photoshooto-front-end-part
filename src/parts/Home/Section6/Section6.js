import React from "react";
// import "./Section6.css";
import styles from "./Section6.module.css";
import mobImg from "./img/phoneimg.png";
import gpImg from "./img/logo.png";
import playstore from "./img/playstore.png";

const Section6 = () => {
  return (
    <div className={styles.homeSection6Container}>
      <div className={styles.homeSection6Col}>
        <img className={styles.mobileimage} data-tilt src={mobImg} alt="mobile" />
        <img className={styles.logoimageinsidethephone} data-tilt src={gpImg} alt="mobile" />
      </div>
      <div className={styles.downloadlinkbox}>
        <div className={styles.detailview}>
          <h3 className={styles.downloadappheading}>Download Our App</h3>
          <p className={styles.downloadapplines}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className={styles.downloadapp}>
            <img className={styles.googleplayestoreimage} data-tilt src={playstore} alt="" />
            <h4 className={styles.googleplay}>Google Play</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;