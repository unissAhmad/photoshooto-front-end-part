import React from "react";

import styles from "./HomeTestimonyCard.module.css";
import "./HomePagination.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

const HomeTestimonyCard = ({
  testimonyData: { id, img, name, jobPost, msg },
}) => {
  return (
    <div className={styles.testimonyCard}>
      <div className={styles.personInfo}>
        <img src={img} alt="programImg" />
        <div className={styles.namePost}>
          <div className={styles.testimonyName}>{name}</div>
          <div className={styles.testimonyJobPost}>{jobPost}</div>
        </div>
      </div>
      <div className={styles.testimonyMsg}>{msg}</div>
    </div>
  );
};

export default HomeTestimonyCard;
