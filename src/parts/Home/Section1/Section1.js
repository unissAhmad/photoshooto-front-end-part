import React from "react";

import styles from "./Section1.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

import camGalImg from "../../../assets/images/camGal.jpeg";

const Section1 = () => {
  return (
    <section className={styles.homeSection1}>
      <div className={styles.homeSec1Info}>
        <div className={styles.leftcontent}>
          <h1>We help to build you its time to come together</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptas esse dolores porro accusamus blanditiis ipsum quam ducimus,
            nulla
          </p>
          <div className={styles.homeSec1BtnContainer}>
            <div className={styles.homeSec1Btn}>Know More</div>
          </div>
        </div>
      </div>
      <div className={styles.homeSec1Design}>
        {/* <div className={styles.rightRectangle}></div> */}
        {/* <div className={styles.leftRectangle}></div> */}
        <img src={camGalImg} alt="img" className={styles.camGalImg} />
      </div>
    </section>
  );
};

export default Section1;
