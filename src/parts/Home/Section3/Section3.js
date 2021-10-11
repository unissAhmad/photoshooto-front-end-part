import React from "react";
import Carousel from "react-elastic-carousel";

import styles from "./Section3.module.css";
// import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// import cx from "classnames";

import card1 from "../../../assets/images/img/card1.png";
import InternshipProgramCard from "../../../components/InternshipProgramCard/InternshipProgramCard";
import InternshipPrograms from "../../../utils/InternshipPrograms.json";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 3 },
];

const Section3 = () => {
  return (
    <section className={styles.homeProgramsContainer}>
      <h1 className={styles.heading}>Internship Programs</h1>
      <h3 className={styles.subHeading}>We have 11 departments</h3>
      <div className={styles.programsCardContainer}>
        <Carousel breakPoints={breakPoints}>
          {InternshipPrograms.map((InternshipProgram) => (
            <InternshipProgramCard
              key={InternshipProgram.id}
              programData={InternshipProgram}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Section3;

// import React from "react";
// import Carousel from "react-elastic-carousel";

// import styles from "./Section3.module.css";
// // import globalStyles from "../../../assets/global-styles/bootstrap.min.module.css";
// // import cx from "classnames";

// import card1 from "../../../assets/images/img/card1.png";
// import InternshipProgramCard from "../../../components/InternshipProgramCard/InternshipProgramCard";
// import InternshipPrograms from "../../../utils/InternshipPrograms.json";

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 500, itemsToShow: 2, itemsToScroll: 1 },
//   { width: 768, itemsToShow: 3, itemsToScroll: 2 },
//   { width: 1200, itemsToShow: 4, itemsToScroll: 3 },
// ];

// const Section3 = () => {
//   return (
//     <section className={styles.homeProgramsContainer}>
//       <svg
//         class={styles.aa}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//       >
//         <path fill="green" fill-opacity="1" d="M0,0L500,160L0,320Z"></path>
//       </svg>

//       <h1 className={styles.heading}>Internship Programs</h1>
//       <h3 className={styles.subHeading}>We have 11 departments</h3>
//       <div className={styles.programsCardContainer}>
//         <Carousel breakPoints={breakPoints}>
//           {InternshipPrograms.map((InternshipProgram) => (
//             <InternshipProgramCard
//               key={InternshipProgram.id}
//               programData={InternshipProgram}
//             />
//           ))}
//         </Carousel>
//       </div>

//       <svg
//         class={styles.bb}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 1440 320"
//       >
//         <path
//           class={styles.cc}
//           fill="green"
//           fill-opacity=".5"
//           d="M1440,0L940,160L1440,320Z"
//         ></path>
//       </svg>
//     </section>
//   );
// };

// export default Section3;
