import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { images } from "./SliderData";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ImageSlider() {
    const [currImg, setCurrImg] = useState(0);

    return (
        <div className={styles.carousel}>
            <div className={styles.carouselInner}>
                <div
                    className={styles.left}
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} size="3x" />
                </div>
                <div className={styles.mybox}>
                    <img src={images[currImg].img} />
                </div>
                <div
                    className={styles.right}
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronRight} size="3x" />
                </div>
            </div>
        </div>
    );
}

export default ImageSlider;
