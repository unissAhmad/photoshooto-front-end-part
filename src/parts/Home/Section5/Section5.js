import React from "react";
import Carousel from "react-elastic-carousel";

import styles from "./Section5.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

import camGalImg from "../../../assets/images/camGal.jpeg";
import HomeTestimonies from "../../../utils/HomeTestimonies.json";

import HomeTestimonyCard from "../../../components/HomeTestimonyCard/HomeTestimonyCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 3 },
];

const Section5 = () => {
  return (
    <section className={styles.homeTestimonyContainer}>
      <h1 className={styles.heading}>Few More Words About Photoshooto..!!</h1>
      <div className={styles.testimonyCardContainer}>
        <Carousel breakPoints={breakPoints}>
          {HomeTestimonies.map((HomeTestimony) => (
            <HomeTestimonyCard
              key={HomeTestimony.id}
              testimonyData={HomeTestimony}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Section5;
