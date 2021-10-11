import React from "react";
import { Link } from "react-router-dom";

import styles from "./HomeBlogsCard.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
import cx from "classnames";

const HomeBlogsCard = ({ blogData: { id, img, title, info, link } }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogImgContainer}>
        <img src={img} alt="programImg" />
        <div className={cx(styles.blogImgDots, styles.top)}></div>
        <div className={cx(styles.blogImgDots, styles.right)}></div>
        <div className={cx(styles.blogImgDots, styles.bottom)}></div>
        <div className={cx(styles.blogImgDots, styles.left)}></div>
      </div>
      {/* <div className={styles.blogTitle}>{title}</div> */}
      <div className={styles.blogInfo}>{info}</div>
      <div className={styles.blogReadMore}>
        <Link to={link}>Read More</Link>
      </div>
    </div>
  );
};

export default HomeBlogsCard;
