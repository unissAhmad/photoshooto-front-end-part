import React from 'react';

import styles from './InternshipProgramCard.module.css';
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

import card1 from '../../assets/images/img/card1.png';
import { Link } from 'react-router-dom';

const InternshipProgramCard = ({
  programData: { id, img, title, info, duration, link },
}) => {
  return (
    <div className={styles.programsCard}>
      <div className={styles.imgDiv}>
        <img src={img} alt="programImg" />
      </div>
      <div className={styles.programTitle}>{title}</div>
      <div className={styles.programInfo}>{info}</div>
      <div className={styles.cardLink}>
        <div className={styles.programDuration}>Duration:{duration}</div>
        <div className={styles.programKnowMore}>
          <Link to={`/programs/${link}`}>Know More</Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipProgramCard;
