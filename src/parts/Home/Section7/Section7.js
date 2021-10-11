import React from "react";
import styles from "./Section7.module.css";
import cx from "classnames";
import image from "./img/image.png"
const Section7 = () => {
  return (
    <>
      <div className={styles.doyoulikeinternship}>
        <div className={styles.leftdoyoulikeinternship}>
          <div className={styles.doyoulikeinternshipheading}>
            Do you like the Internship?
          </div>
          <div className={styles.doyoulikeinternshipinfo}>
            <div className={styles.doyoulikeinternshiptop}>
              <input className={cx(styles.doyoulikeinternshipdetails, styles.doyoulikeinternshipdetailsemail)} type="text" name="name" placeholder="Name" />
              <input className={styles.doyoulikeinternshipdetails} type="email" name="email" placeholder="E-mail" />
            </div>
            <div className={styles.doyoulikeinternshipbottom}>
              <div>
                <input className={styles.doyoulikeinternshipdetails} type="phone" name="phone" placeholder="Phone no." />
              </div>
              <div>
                <select className={cx(styles.doyoulikeinternshipdetails, styles.doyouinternship)} name="cars" id="cars">
                  <option selected className={cx(styles.doyoulikeinternshipdetails, styles.doyouinternship)} value="Program Name">Program Name</option>
                  <option className={cx(styles.doyoulikeinternshipdetails, styles.doyouinternship)} value="volvo">Volvo</option>
                  <option className={cx(styles.doyoulikeinternshipdetails, styles.doyouinternship)} value="saab">Saab</option>
                  <option className={cx(styles.doyoulikeinternshipdetails, styles.doyouinternship)} value="opel">Opel</option>
                  <option className={cx(styles.doyoulikeinternshipdetails, styles.doyouinternship)} value="audi">Audi</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.reservebutton}>
            <button className={styles.reserveseatbutton}>Reserve Seat</button>
          </div>
        </div>
        <div className={styles.rightdoyoulikeinternship}>
          <img className={styles.rightdoyoulikeinternshipimage} src={image} alt="" />
        </div>
      </div>
      {/* <div className={styles.subscribetonewsletter}>
      <div className={styles.subscribetonewsletterheading}> Subscribe to Newsletter</div>
      <div className={styles.subscribetonewsletterdetailscontainer}>
      <div className={styles.subscribetonewsletteremail}><input className={styles.subscribetonewsletterdetails} type="email" name="email" placeholder="E-mail"/></div>
      <div className={styles.termsandpolicy}>
        <label className={styles.main}>Accept all Terms and Conditions<input type="checkbox"/><span className={styles.geekmark}></span></label>
        <label className={styles.main}>Accept all Privacy and Policy<input type="checkbox"/><span className={styles.geekmark}></span></label>
      </div>
      <div className={styles.subscribetonewsletterjoin}><button className={styles.joinbutton}>Join</button></div>
      </div>
    </div> */}
    </>
  );
};

export default Section7;