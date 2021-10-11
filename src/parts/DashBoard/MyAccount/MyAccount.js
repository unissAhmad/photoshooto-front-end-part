import React, { useRef } from 'react'
import styles from './MyAccount.module.css'
import img from '../../../assets/images/man-1845814_640 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";


const MyAccount = () => {
    const uploadedImage = useRef(null);
    const imageUploader = useRef(null);
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            {/* <div className={styles.temp}></div> */}
            <div id="myaccount" className={styles.myContainer}>
                <h1 className={styles.heading1}>My Account</h1>
                <div className={styles.info}>
                    <div className={styles.summary}>
                        <div className={styles.pic}>
                            <div className={styles.profilepic}>
                                <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader}
                                    style={{ display: "none" }} />
                                <img src={img} ref={uploadedImage} alt="profile-pic" />
                                <div className={styles.camera} onClick={() => imageUploader.current.click()}><FontAwesomeIcon icon={faCamera} size="2x" /></div>
                            </div>
                        </div>
                        <div className={styles.report}>
                            <div className={styles.chart}>
                                <div className={styles.data}>
                                    <div><div className={styles.bullet1}></div><li>Total Attendance</li></div>
                                    <h4>56</h4><span>/70</span>
                                    <h6>Days</h6>
                                </div>
                                <div className={styles.per}><CircularProgressbar value="81" text="81%"
                                    styles={{
                                        path: {
                                            stroke: `rgba(112, 0, 255,81)`,
                                        },
                                        trail: {
                                            stroke: '#EEEEEE',
                                        },
                                        text: {

                                            fill: '#000000',
                                            fontSize: '34px',
                                            fontWeight: 'bold',
                                        },
                                    }}
                                /></div>
                            </div>
                            <div className={styles.chart}>
                                <div className={styles.data}>
                                    <div><div className={styles.bullet2}></div><li>Profile Completed</li></div>
                                    <h4>10</h4><span>/12</span>
                                </div>
                                <div className={styles.per}><CircularProgressbar value="67" text="67%"
                                    styles={{
                                        path: {
                                            stroke: `rgba(255, 158,67)`,
                                        },
                                        trail: {
                                            stroke: '#EEEEEE',
                                        },
                                        text: {

                                            fill: '#000000',
                                            fontSize: '34px',
                                            fontWeight: 'bold',
                                        },
                                    }}
                                /></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.content}>
                            <h1 className={styles.heading2}>Personal Info</h1>
                            <div className={styles.detail}>
                                <p>NAME:</p>
                                <p>GENDER:</p>
                                <p>DOB.:</p>
                                <p>APPLICATION NO :</p>
                                <p>APPLIED POSITION:</p>
                                <p>ADDRESS:</p>
                                <p>MOBILE NO.:</p>
                                <p>EMAIL ID.:</p>
                            </div>
                        </div>
                        <div className={styles.edit}><Link to="/"><button className={styles.btn}>Edit Profile</button></Link></div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.content}>
                            <h1 className={styles.heading2}>Experience</h1>
                        </div>
                        <div className={styles.edit}><Link to="/addexperience"><button className={styles.btn}>Add Experience
                        </button></Link></div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.content}>
                            <h1 className={styles.heading2}>Education</h1>
                        </div>
                        <div className={styles.edit}><Link to="/addeducation"><button className={styles.btn}>Add Education
                        </button></Link></div>
                    </div>
                    <div className={styles.section}>
                        <div className={styles.content}>
                            <h1 className={styles.heading2}>Skills</h1>
                        </div>
                        <div className={styles.edit}><Link to="/addskills"><button className={styles.btn}>Add Skills
                        </button></Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccount;

