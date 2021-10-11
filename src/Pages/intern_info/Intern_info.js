import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Intern_info.css"


const Intern_info = () => {

  const validate = Yup.object().shape({
    firstname: Yup.string()
      .max(15, "max 15 character")
      .required("firstname is Required"),
    lastname: Yup.string()
      .max(15, "max 15 character")
      .required("lastname is Required"),
    midname: Yup.string()
      .max(20, "max 20 character")
      .required("midname is Required"),

    mobile: Yup.number()
      .max(10, "must 10 digits")
      .min(10, "must 10 digits")
      .required("contact no. is Required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is Required"),
    college_name: Yup.string()
      .min(5, "max 15 character")
      .required("college name is Required"),
    pcoordinator: Yup.string()
      .max(30, "max 30 character"),
    course: Yup.string()
      .max(15, "max 15 character")
      .required("firstname is Required"),
  })
  const [firstname, setFirstname] = useState("");
  const [midname, setMidname] = useState("");
  const [lastname, setLastname] = useState("");

  const [bday, setBday] = useState("");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [college_name, setCollege_name] = useState("");
  const [course, setCourse] = useState("");

  const [pcoordinator, setPcoordinator] = useState("");
  const [intrenship_purpose, setIntrenship_purpose] = useState("");

  const [skills, setSkills] = useState("");
  const [reffered_by, setReffered_by] = useState("");



  return (
    <div id="intern_info_card">
      <Formik initialValues={{
        firstname: '',
        midname: '',
        lastname: '',
        mobile: '',
        email: '',
        college_name: '',
        pcoordinator: '',
        course: ''
      }}
        validationSchema={validate}
      >
        {formik => (
          <Form>
            <div style={{ marginLeft: "4vw", marginTop: "3vw", marginBottom: "5vw", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
              <div style={{ marginTop: "4vw" }}>
                <p><a href style={{ color: "#005A8C", fontSize: "36px", fontFamily: "Roboto", fontWeight: "bold" }}>Intern info</a></p>
              </div>
              <div>
                <p id="boxname1001" >Your Name<span id="star">*</span></p>
                <div style={{ display: "flex" }}>
                  <div>
                    <input className="inputbox1001" placeholder="Nitin" type="text"
                      value={firstname} name="firstname" style={{ width: "18vw", marginLeft: "0px" }}
                      onChange={(e) => setFirstname(e.target.value)} ></input>
                    <ErrorMessage component="div" name="firstname" className="error" />
                  </div>
                  <div>
                    <input className="inputbox1001" placeholder="Mikeshbhai" type="text"
                      value={midname} name="midname" style={{ width: "18vw" }}
                      onChange={(e) => setMidname(e.target.value)} ></input>
                    <ErrorMessage component="div" name="midname" className="error" />
                  </div>
                  <div>
                    <input className="inputbox1001" placeholder="Patel" type="text"
                      value={lastname} name="lastname" style={{ width: "18vw" }}
                      onChange={(e) => setLastname(e.target.value)} ></input>
                    <ErrorMessage component="div" name="lastname" className="error" />
                  </div>
                </div>
              </div>
              <div>
                <p id="boxname1001" >BirthDate<span id="star">*</span></p>
                <div >
                  <input className="inputbox1001" placeholder="Date" type="date"
                    value={bday} style={{ marginLeft: "0px", width: "18vw" }}
                    onChange={(e) => setBday(e.target.value)}
                  ></input>
                </div>
              </div>
              <div>
                <p id="boxname1001" >Contact No<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <input className="inputbox1001" placeholder="0000000000"
                    value={mobile} name="mobile"
                    onChange={(e) => setMobile(e.target.value)}
                    type="text" style={{ margin: "0px", width: "25vw" }}></input>
                  <ErrorMessage component="div" name="mobile" className="error" />
                </div>
              </div>
              <div>
                <p id="boxname1001" >email<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <input className="inputbox1001" placeholder="xyz@gmail.com"
                    value={email} name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="text" style={{ margin: "0px", width: "25vw" }}></input>
                  <ErrorMessage component="div" name="email" className="error" />
                </div>
              </div>
              <div>
                <p id="boxname1001" >College name<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <input className="inputbox1001" placeholder="indian university"
                    value={college_name} name="college_name"
                    onChange={(e) => setCollege_name(e.target.value)}
                    type="text" style={{ margin: "0px" }}></input>
                  <ErrorMessage component="div" name="college_name" className="error" />
                </div>
              </div>
              <div>
                <p id="boxname1001" >Course<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <input className="inputbox1001" placeholder="B.tech"
                    value={course} name="course"
                    onChange={(e) => setCourse(e.target.value)}
                    type="text" style={{ margin: "0px", width: "25vw" }}></input>
                  <ErrorMessage component="div" name="course" className="error" />
                </div>
              </div>
              <div>
                <p id="boxname1001" >Name Of The Placement Coordinator/Dean<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <input className="inputbox1001" placeholder="B.tech"
                    value={pcoordinator} name="pcoordinator"
                    onChange={(e) => setPcoordinator(e.target.value)}
                    type="text" style={{ margin: "0px", width: "25vw" }}></input>
                </div>
              </div>
              <div>
                <p id="boxname1001" >What Is Perpose Of Join this Internship<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <textarea className="inputbox1001" type="textarea"
                    value={intrenship_purpose} name="intrenship_purpose"
                    onChange={(e) => setIntrenship_purpose(e.target.value)}
                    cols="65" style={{ margin: "0px" }}></textarea>
                </div>
              </div>
              <div>
                <p id="boxname1001" >What Type Of Profile Would You Like to Intern In?<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <select className="inputbox1001" >
                    <option rows="50" value="select">select intrenship program </option>
                  </select>
                </div>
              </div>
              <div>
                <p id="boxname1001" >What Relevent Skills Or Experience Do You Have Before Beginning An Internship?<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <textarea className="inputbox1001" type="textarea"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    cols="65" style={{ margin: "0px" }}></textarea>
                </div>
              </div>

              <div>
                <p id="boxname1001" >How Much Time Would You Like to Intern ?<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <select className="inputbox1001"  >
                    <option rows="50" value="select">Start Time period </option>
                  </select>
                </div>
              </div>

              <div>
                <p id="boxname1001" >Upload Your CV<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <label className="inputbox1001" style={{ paddingLeft: "2.5vw", paddingRight: "2.5vw" }}>
                    <input type="file" style={{ display: "none" }} />
                    Select File
                  </label>

                  {/* <input class="inputbox1001" placeholder="Select file" type="file" style={{ margin: "0px", display: "none" }}></input> */}
                </div>
              </div>
              <div>
                <p id="boxname1001" >Upload Adhar Card(pdf/jpg/jpeg)<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <label className="inputbox1001" style={{ paddingLeft: "2.5vw", paddingRight: "2.5vw" }}>
                    <input type="file" style={{ display: "none" }} />
                    Select File
                  </label>
                </div>
              </div>


              <div>
                <p id="boxname1001" >Reffered By (Name Of The Person)<span id="star">*</span></p>
                <div style={{ margin: "0px" }}>
                  <input className="inputbox1001" placeholder="Kapil Shing"
                    value={reffered_by}
                    onChange={(e) => setReffered_by(e.target.value)}
                    type="text" style={{ margin: "0px" }}></input>
                </div>
              </div>

              <div>
                <div style={{ marginLeft: "0vw", marginTop: "1.5vh" }}>
                  <input type="checkbox" name="vehicle1" value="acceptterms" style={{ width: "20px", marginLeft: "0vw" }} />
                  <label for="vehicle1" style={{ color: "#005A8C" }}> Accept all Terms and Conditions</label><br />
                </div>
                <div style={{ marginLeft: "0vw" }}>
                  <input type="checkbox" name="vehicle2" value="acceptpolicie" style={{ width: "20px", marginLeft: "0vw" }} />
                  <label for="vehicle1" style={{ color: "#005A8C" }}> Accept all Privacy and policies</label><br />
                </div>
              </div>

              <div style={{ marginBottom: "3vw", marginLeft: "73vw" }}>
                <button className="submit-btn" type="submit" style={{ backgroundColor: "#005A8C", color: "white", padding: "4px 2.7vw 4px 2.7vw", borderRadius: "0.3em" }}> submit </button>
              </div>
            </div >
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Intern_info;
