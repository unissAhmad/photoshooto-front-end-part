import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./ProgramPage.css";

import Home from "../../assets/images/img/home.png";
import Start from "../../assets/images/img/startDate.png";
import Duration from "../../assets/images/img/duration.png";
import Stipend from "../../assets/images/img/stipend.png";
import Apply from "../../assets/images/img/applyby.png";
import About from "../../assets/images/img/aboutInternship.png";
import Wireframe from "../../assets/images/img/wireframe.png";
import Prototype from "../../assets/images/img/prototype.png";
import DownRectangle from "../../assets/images/img/down.png";
import Team from "../../assets/images/img/team.png";
import Man from "../../assets/images/img/man.png";
import certificate from "../../assets/images/img/certificate.png";
import images from "./image/25533.jpg";
import Popup from '../../Certificate Popup/Popup.js';

import ProgramsPageData from "../../utils/ProgramsPageData.json";

const ProgramPage = () => {
  const { progName } = useParams();
  //   console.log(progName);

  let program = ProgramsPageData.find((prog) => prog.dept == progName);
  //   console.log(program.title);
  //   console.log(program.skillsRequired);


  /* Certificate Modal */
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="programPageContainer">
      {/* <div className="navbar-background"></div> */}

      {/* First section containing Title and the specific image------------------*/}
      <div className="program-head">
        <div className="title-div">
          <h2>{program.title}</h2>
          <div className="lower-bar"></div>
          <p>{program.description}</p>
          <div className="apply-btn">Apply</div>
        </div>
        <div className="program-image"></div>
      </div>

      {/* Second section containing Internship Information--------------------*/}
      <div className="workfromhomewrapper">
        <div className="workaboutcontainer">
          <div className="workfromhomecontainer">
            <div className="workfromhome1">
              <img className="workfromhomelogos" src={Home} alt=""></img>
              <h3 className="workfromhomeheadings">Work from Home</h3>
            </div>
            <div className="workfromhome2">
              <div className="workfromhomeinfo">
                <div className="workfromhomeinfologo">
                  <img className="startdatelogo" src={Start} alt="" />
                </div>
                <div className="workfromhomeinfodetails">
                  <div className="firsthead">
                    <h1 className="firstline">Start Date</h1>
                  </div>
                  <div className="secondhead">
                    <h6 className="secondline">
                      {program.workFromHome.startDate}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="workfromhomeinfo">
                <div className="workfromhomeinfologo">
                  <img className="startdatelogo" src={Duration} alt="" />
                </div>
                <div className="workfromhomeinfodetails">
                  <div className="firsthead">
                    <h6 className="firstline">Duration</h6>
                  </div>
                  <div className="secondhead">
                    <h6 className="secondline">
                      {program.workFromHome.duration}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="workfromhomeinfo">
                <div className="workfromhomeinfologo">
                  <img className="startdatelogo" src={Stipend} alt="" />
                </div>
                <div className="workfromhomeinfodetails">
                  <div className="firsthead">
                    <h6 className="firstline">Stipend</h6>
                  </div>
                  <div className="secondhead">
                    {" "}
                    <h6 className="secondline">
                      {program.workFromHome.stipend}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="workfromhomeinfo">
                <div className="workfromhomeinfologo">
                  <img className="startdatelogo" src={Apply} alt="" />
                </div>
                <div className="workfromhomeinfodetails">
                  <div className="firsthead">
                    <h6 className="firstline">Apply By</h6>
                  </div>
                  <div className="secondhead">
                    {" "}
                    <h6 className="secondline">
                      {program.workFromHome.applyBy}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutinternshipcontainer">
            <div className="aboutinternship">
              <img className="aboutinternshiplogo" src={About} alt="" />
              <div className="aboutintershipheading">About Internship</div>
            </div>
            <div className="aboutinternshipcontainerbox">
              <div className="aboutinternshipdetails">
                <ul>
                  <li className="aboutinternshipline">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="aboutinternshipline">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="aboutinternshipline">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                  <li className="aboutinternshipline">
                    Lorem, ipsum dolor sit amet consectetur
                  </li>
                </ul>
              </div>
              <div className="aboutinternshipinnerbox">
                <h4 className="statusheading">Status</h4>
                <div className="numberofopening"><h5 className="statusline1">Number of Openings : </h5><div className="numberofopening1 numberofopening2">{program.aboutInternship.status.noOfOpenings}</div></div>
                <div className="numberofopening"><h5 className="statusline1">Candidate Applied : </h5><div className="numberofopening1 numberofopening3">{program.aboutInternship.status.candidatesApplied}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3, Skills Required------------------------------- */}
      <div className="skills">
        <h1>Skills Required</h1>
        <div className="skills-mini">
          {program.skillsRequired.map((skill) => (
            <div>
              <img src={skill.image} alt="skillImg"></img>
              <p>{skill.title}</p>
            </div>
          ))}

          {/* <div>
            <img src={Prototype} />
            <p>{program.skillsRequired.title}</p>
          </div>
          <div>
            <img src={Wireframe} />
            <p>Wireframing</p>
          </div>
          <div>
            <img src={Prototype} />
            <p>Prototyping</p>
          </div> */}
        </div>
      </div>

      {/* Section 4 containing Perks------------------------------------*/}
      <div className="perks">
        <h1>Perks</h1>
        <div className="perks-mini">
          <div className="perks-bullet">
            <div className="squared-div"></div>
            <p>Certificate</p>
          </div>
          <div className="perks-bullet">
            <div className="squared-div"></div>
            <p>Letter of Recommendation</p>
          </div>
          <div className="perks-bullet">
            <div className="squared-div"></div>
            <p>Flexible Work Hours</p>
          </div>
          <div className="perks-bullet">
            <div className="squared-div"></div>
            <p>6 Days a Week</p>
          </div>
        </div>
      </div>

      {/* Section 5 - How Our Internship Work----------------------------------- */}
      <div className="function">
        <h1>How Our Internship Work</h1>
        <div className="function-mini">
          <div>
            <img src={DownRectangle} />
            <p>1</p>
            <p className="p-info">Interview</p>
          </div>
          <div className="dotted-line"></div>
          <div>
            <img src={DownRectangle} />
            <p>2</p>
            <p className="p-info">Offer letter</p>
          </div>
          <div className="dotted-line"></div>
          <div>
            <img src={DownRectangle} />
            <p>3</p>
            <p className="p-info">Work with us</p>
          </div>
          <div className="dotted-line"></div>
          <div>
            <img src={DownRectangle} />
            <p>4</p>
            <p className="p-info">Get Certificate</p>
          </div>
        </div>
      </div>

      {/*Section 6 containing Values---------------------------------------*/}
      <div className="values">
        <h1>Values You get from Us</h1>
        <div className="values-mini">
          {program.valuesYouGet.map((value) => (
            <div className="value-div">
              <img src={value.image} alt="valueImg" />
              <h5>{value.title}</h5>
            </div>
          ))}

          {/* <div className="value-div">
            <img src={Team} />
            <h5>Team Work</h5>
          </div>
          <div className="value-div">
            <img src={Team} />
            <h5>Team Work</h5>
          </div>
          <div className="value-div">
            <img src={Team} />
            <h5>Team Work</h5>
          </div>
          <div className="value-div">
            <img src={Team} />
            <h5>Team Work</h5>
          </div> */}
        </div>
      </div>

      {/* Section 7 containing Certificate---------------------------------------- */}
      <div className="certificate">
        <h1>Our Certificate</h1>
        <div className="certificate-mini">
          <div className="certificate-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet,consectetur Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
          <div className="certificate-right">
            <img onClick={togglePopup} src={certificate} alt="" />
          </div>
        </div>
      </div>

      {/* Section 8 containing Reviews----------------------------------------- */}

      {/* <div className="reviews">
        <h1>Reviews</h1>
        <div className="reviews-mini">
          {program.reviews.map((review) => (
            <div className="reviews-card">
              <div className="reviewer">
                <img src={review.img} alt="Reviewer" />
                <p>{review.name}</p>
              </div>
              <div className="review-paragraph">
                <p>{review.message} </p>
              </div>
            </div>
          ))}
 </div> */}
      <div className="reviews">
        <h1>Reviews</h1>
        <div className="reviewsmini">
          {program.reviews.map((review) => (

            <div className="reviewscard">
              <div className="reviewer">
                <img className="reviewimage" src={review.img} alt="Reviewer" />
                <div className="outerofnameandstars">
                  <h3 className="reviewername">{review.name}</h3>
                  <div className="starsinreviewsinprograms">
                    {
                      Array.from(Array(review.start), (e, i) => {
                        return <img className="reviewstarimage" src={images} alt="" srcset="" width="18px" height="18px" />
                      })
                    }
                  </div>
                </div>
                <div className="rt">
                <div className="reviewtime">{review.date}</div>
                </div>
              </div>
              <div className="reviewparagraph">
                <p>{review.message} </p>
              </div>
            </div>

          ))}
        </div>
        <div className="apply-now-btn">Apply</div>
      </div>
      {/* 
          <div className="reviews-card">
            <div className="reviewer">
              <img src={Man} />
              <p>John Doe</p>
            </div>
            <div className="review-paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an .
              </p>
            </div>
          </div>
          <div className="reviews-card">
            <div className="reviewer">
              <img src={Man} />
              <p>John Doe</p>
            </div>
            <div className="review-paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an .
              </p>
            </div>
          </div>
          <div className="reviews-card">
            <div className="reviewer">
              <img src={Man} />
              <p>John Doe</p>
            </div>
            <div className="review-paragraph">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an .
              </p>
            </div>
          </div>
 */}

      {isOpen && <Popup handleClose={togglePopup} />}


    </div>
    // </div>
  );
};

export default ProgramPage;
