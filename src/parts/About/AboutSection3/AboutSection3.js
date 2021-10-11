import React, { useState } from 'react'
import Arrow from "./image/arrow.png";
import Head from "./image/head.png";
import Mask from "./image/Mask-Group.jpg";
import styles from "./AboutSection3.module.css";
import Query from '../../../Query Popup/QueryPopup';


const AboutSection3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div>
                <div className={styles.bg}>
                    <img className={styles.headimg1} src={Head} alt="" />
                    <img className={styles.headimg2} src={Mask} alt="" />

                    <div className={styles.inner}>
                        <h1 className={styles.heading}>"YOUR MEMORIES, OUR PROMISE"</h1>
                        <p className={styles.headpara}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nam consequuntur dignissimos! Eum, veniam
                            quis assumenda velit odit quae neque nemo, labore voluptate, nisi ex? Libero illo hic ullam totam?</p>
                        <button onClick={togglePopup} className={styles.enquirnow}>Enquire Now</button>
                        {isOpen && <Query handleClose={togglePopup} />}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h3 className={styles.columnheading}>Our Mission</h3>
                        <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className={styles.imagecontainer}>
                    <img className={styles.arrowimaage} src={Arrow} alt="" />
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.columnheading}>Our Vision</h3>
                        <p className={styles.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection3
