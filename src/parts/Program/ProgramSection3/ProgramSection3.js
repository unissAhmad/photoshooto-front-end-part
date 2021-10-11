import React from 'react'
import InternshipPrograms from "../../../utils/ProgramsPageData.json";
import styles from "./ProgramSection3.module.css";
import images from "./image/25533.jpg";


const ProgramSection3 = () => {
    return (
        <div>
             <div className={styles.reviews}>
        <h1>Reviews</h1>
        <div className={styles.reviewsmini}>
          {InternshipPrograms[0].reviews.map((review) => (
            
           <div className={styles.reviewscard}>
              <div className={styles.reviewer}>
                <img className={styles.reviewimage} src={review.img} alt="Reviewer"/>
                <div className={styles.outerofnameandstars}>
                <p>{review.name}</p>
                <div className={styles.starsinreviewsinprograms}>
                {
                  Array.from(Array(review.start),(e,i)=>{
                    return  <img className={styles.reviewstarimage} src={images} alt="" srcset="" width="18px" height="18px" />
                  })
                }
                </div>
                </div>
                <div className={styles.reviewtime}>{review.date}</div>
              </div>
              <div className={styles.reviewparagraph}>
                <p>{review.message} </p>
              </div>
            </div>
          
          ))}
          </div>
          </div>
        </div>
    )
}

export default ProgramSection3
