import React from "react";
import styles from "./BlogSection1.module.css";
import img from "./image/Rectangle 1.png";
import right from "./image/right-arrow (1) 1.png";
import left from "./image/right-arrow (1) 2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-bootstrap/Carousel'
import blogSlider from '../../../utils/BlogSlides.json'
import "./BlogSection.css";
import { Link } from "react-router-dom";

const BlogSection1 = () => {
  const nextIcon = <span className="glyphicon glyphicon-glass"><img src={right} /></span>;
  const prevIcon = <span className="glyphicon glyphicon-glass"><img src={left} /></span>;
  return (
    <div className={styles.BlogSliderContainer}>
      <div className={styles.popular}><Link className={styles.plink} to='/'>Popular</Link></div>
      <Carousel nextIcon={nextIcon} prevIcon={prevIcon} >
        {
          blogSlider.map((Slide) => {
            const path="./image/"+Slide.img
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  style={{ height: "100vh" }}
                  src={img}
                  alt="First slide"
                />
                <Carousel.Caption style={{ top: "12.25rem" }}>
                  <h3>{Slide.title}</h3>
                  <p>{Slide.info}</p>
                  <div className={styles.searchbar}>
                    <input type="search" placeholder="Search Category " />
                    <FontAwesomeIcon className={styles.icon} icon={faSearch} />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })
        }

      </Carousel>
    </div>
  );

};

export default BlogSection1;