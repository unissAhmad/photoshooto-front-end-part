import React from "react";
import styles from './Popup.module.css'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageSlider from './Carousel';

const Popup = props => {
    return (
        <div className={styles.popup}>
            <div className={styles.box}>
                <span className={styles.closeicon} onClick={props.handleClose}><FontAwesomeIcon icon={faTimes} size="lg" /></span>
                <ImageSlider />
            </div>
        </div>
    );
};

export default Popup;
