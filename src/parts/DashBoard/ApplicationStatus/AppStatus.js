

import AppCard from './AppCard';
import styles from "./AppStatus.module.css"

import img1 from "./images/approve.jpg"
import img2 from "./images/mobile-phone.png"
import img3 from "./images/document.png"
import img4 from "./images/interview.png"

function AppStatus() {
  return (
    <div id="appstatus" className={styles.AppStatusContainer}>
      <header className={styles.Appheader}>
      
        <h2 className={styles.title}>Application Status</h2>
        <div className={styles.container}>

          <AppCard step = "1" image ={img1} info = "Application Submission" />
          <div className={styles.line1}></div>
          
          <AppCard step = "2" image = {img2} info = "Documents Verified"/>
          <div className={styles.line2}></div>

          <AppCard step = "3" image = {img3} info = "Application Shortlisted"/>
          <div className={styles.line3}></div>

          <AppCard step = "4" image = {img4} info = "Interview Schedule"/>
     
          
        </div>
      
      </header>
    </div>
  );
}

export default AppStatus;
