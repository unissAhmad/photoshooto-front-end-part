import React from 'react'
import Image1 from "./image/img1.png";
import Image2 from "./image/img2.png";
import Image3 from "./image/img3.png";
import Image4 from "./image/img4.png";
import styles from "./AboutSection1.module.css";



const AboutSection1 = () => {
    return (
        <div className={styles.containerouter}>
            <div className={styles.container}>
            </div>
            <div className={styles.before}>

            </div>
            <div className={styles.imgcontainer}>
                <div className={styles.row1}>
                    <img className={styles.imagethree} src={Image1} alt="" height="195px" width="208px" />
                    <img className={styles.imagetwo} src={Image2} alt="" height="195px" width="208px" />
                </div>
                <div className={styles.row2}>
                    <img className={styles.imagethree} src={Image3} alt="" />
                    <img className={styles.imagetwo} src={Image4} alt="" height="195px" width="208px" />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentinner}>

                    <h1 className={styles.woweareheading}>Who we are?</h1>
                    <p className={styles.wowearepara}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default AboutSection1
