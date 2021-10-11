import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

import styles from "./Section4.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

import img1 from "./img/1st.jpeg";
import HomeBlogs from "../../../utils/HomeBlogs.json";
import HomeBlogsCard from "../../../components/HomeBlogsCard/HomeBlogsCard";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 3 },
];

const Section4 = () => {
  return (
    <section className={styles.homeBlogsContainer}>
      <h1 className={styles.heading}>Blogs</h1>
      <h3 className={styles.subHeading}>
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
      </h3>
      <div className={styles.blogsCardContainer}>
        <Carousel breakPoints={breakPoints}>
          {HomeBlogs.map((HomeBlog) => (
            <HomeBlogsCard key={HomeBlog.id} blogData={HomeBlog} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Section4;
