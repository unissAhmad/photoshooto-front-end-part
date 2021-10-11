import React from 'react'
import CEOImage from "./image/CEO.png";
import DirectorImage from "./image/Director.png";
import "./AboutSection4.css";
// import styles from "./AboutSection4.module.css";
// import Card from "react-bootstrap/Card";
const AboutSection4 = () => {

  return (
    <div>
      <section className="container">
        <h1 className={`text-center my-3 meetourleaders`}>Meet Our Leaders</h1>
        <div className="info">
          <div className="meetouter">
            <div className="aboutleaderouter">
              <div className="ceofounderpart">
                <img
                  className="pic rounded-circle"
                  src={CEOImage}
                  alt=""
                  width="150px"
                  height="150px"
                />
                <div className="leaderinfo">
                  <div className="ceoname">Siddaya</div>
                  <div className="directorouterhead directorheading">CEO & Founder</div>
                </div>
              </div>
              <div className="ceofounderpara">
                <p className="wwd-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type.
                </p>
              </div>
            </div>
            <div className="aboutleaderouter">
              <div className="directorpart">
                <img
                  className="pic rounded-circle"
                  src={DirectorImage}
                  alt=""
                  width="150px"
                  height="150px"
                />
                <div className="leaderinfo">
                  <div className="ceoname">B.S.Ramamurty</div>
                  <div className="directorouterhead directorheading">Director</div>
                </div>
              </div>
              <div className="directorpara">
                <p className="wwd-para">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h1 className="frequentlyasked">Frequently Asked Question</h1>

        <div className="accordion accordianbox">
          <div className="accordion-item" id="q1">
            <a className="accordion-link" href="#q1">
              What is Internship?
              <i className="icon ion-md-add"></i>
              <i className="icon ion-md-remove"></i>
            </a>
            <div className="faqanswer">
              <p className="faqanswerpara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type
              </p>
            </div>
          </div>
          {/* <hr className="hrtagstyle"></hr> */}

          <div className="hrtagstyle"></div>
          <div className="accordion-item" id="q2">
            <a className="accordion-link" href="#q2">
              What is ui/ux?
              <i className="icon ion-md-add"></i>
              <i className="icon ion-md-remove"></i>
            </a>
            <div className="faqanswer">
              <p className="faqanswerpara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type
              </p>
            </div>
          </div>
          <div className="hrtagstyle"></div>

          <div className="accordion-item" id="q3">
            <a className="accordion-link" href="#q3">
              Is this internship is unpaid
              <i className="icon ion-md-add"></i>
              <i className="icon ion-md-remove"></i>
            </a>
            <div className="faqanswer">
              <p className="faqanswerpara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type
              </p>
            </div>
          </div>
          <div className="hrtagstyle"></div>


          <div className="accordion-item" id="q4">
            <a className="accordion-link" href="#q4">
              Differnert Internship fields?
              <i className="icon ion-md-add"></i>
              <i className="icon ion-md-remove"></i>
            </a>
            <div className="faqanswer">
              <p className="faqanswerpara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type
              </p>
            </div>
          </div>
          <div className="hrtagstyle"></div>


          <div className="accordion-item" id="q5">
            <a className="accordion-link" href="#q5">
              What is Internship?
              <i className="icon ion-md-add"></i>
              <i className="icon ion-md-remove"></i>
            </a>
            <div className="faqanswer">
              <p className="faqanswerpara">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection4
