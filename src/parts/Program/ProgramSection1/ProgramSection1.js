// import Carousel from "react-elastic-carousel";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react'
import ProgramsPageData from "../../../utils/ProgramsPageData.json";
import styles from "./ProgramSection1.module.css";
import "./ProgramSection11.css";
import { Link, useHistory } from 'react-router-dom';
const ProgramSection1 = () => {
  const history  = useHistory();
    const breakPoints = {
         showArrows: 0,
         autoPlay: 1,
         itemsToShow:1,
         itemsToScroll:1,
         interval:3000, 
         infiniteLoop:1,
         swipeable:1,
         showStatus:0,
         showIndicators:1,
         stopOnHover:0, 
         transitionTime:1000   
         }
    
    return (
        <div>
            {/* <div className={styles.programbar}></div> */}
            <div className={styles.programslideshow}>
                <Carousel {...breakPoints} onClickItem={(index,item)=>{
                    history.push(`/${ProgramsPageData[index].dept}`)
                }} >
                    {
                        ProgramsPageData.map((Internship)=>{
                          return (
                              <>
                            <div className={styles.programhead}>
                            <div className={styles.titlediv}>
                                <div className={styles.covering}>
                                  <h2 className={styles.programpagetitle}>{Internship.title}</h2>
                                   <div className={styles.lowerbar}></div>
                                </div>
                                <p className={styles.programpagedes}>{Internship.description}</p>
                              <div className={styles.applybtn}>Explore more</div>
                            </div>
                            <img className={styles.bannerimage} src={Internship.bannerImg} alt="" />
                            </div>
                          </>
                          )
                        })
                    }
                </Carousel>
            </div>

  
    </div>
  )
}

export default ProgramSection1
