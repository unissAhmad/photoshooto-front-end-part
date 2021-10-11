import React from "react";

import "./HomePage.css";

import Section1 from "../../parts/Home/Section1/Section1";
import Section2 from "../../parts/Home/Section2/Section2";
import Section3 from "../../parts/Home/Section3/Section3";
import Section4 from "../../parts/Home/Section4/Section4";
import Section5 from "../../parts/Home/Section5/Section5";
import Section6 from "../../parts/Home/Section6/Section6";
import Section7 from "../../parts/Home/Section7/Section7";

const HomePage = () => {
  return (
    <div className="homeContainer">
      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}

      <Section2 />

      {/* Section 3 */}
      <Section3 />

      {/* Section 4 */}
      <Section4 />

      {/* Section 5 */}
      <Section5 />

      {/* Section 5 */}
      <Section6 />

      {/* Section 5 */}
      <Section7 />
    </div>
  );
};

export default HomePage;
