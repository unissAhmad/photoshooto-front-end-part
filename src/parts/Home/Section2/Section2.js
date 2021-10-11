import React from "react";
import { Link } from "react-router-dom";

import styles from "./Section2.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

// import "./Section2.css";
import lappyImg from "../../../assets/images/lappy.png";

const Section2 = () => {
  return (
    <section className={styles.homeSection2}>
      <div className={styles.section2Row}>
        <div className={styles.section2Col}>
          <img src={lappyImg} alt="img" />
        </div>
        <div className={styles.section2Col}>
          <h1>What is the internship program?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            architecto nulla dignissimos distinctio eligendi blanditiis cum
            similique quis esse! Iure pariatur quisquam sit culpa, voluptas id.
            Sunt quas dolorem mollitia.
          </p>
          <Link to="#">Read more</Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
