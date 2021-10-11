import React from "react";

import "./ProgramsPage.css";
import ProgramSection1 from "../../parts/Program/ProgramSection1/ProgramSection1";
import ProgramSection2 from "../../parts/Program/ProgramSection2/ProgramSection2";
import ProgramSection3 from "../../parts/Program/ProgramSection3/ProgramSection3";



const ProgramsPage = () => {
  return (<div>
    <ProgramSection1 />

    <ProgramSection2 />

    <ProgramSection3 />
  </div>);
};

export default ProgramsPage;
