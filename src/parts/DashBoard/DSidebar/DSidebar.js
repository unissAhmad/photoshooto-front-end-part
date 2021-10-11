import React from 'react'
import styles from './DSidebar.module.css'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
// import logo from '../Images/Logo.svg'
// import profile from '../Images/Profile.svg'
// import vector from '../Images/Vector.svg'
// import exit from '../Images/Exit.svg'
// import img from '../../assets/images/man-1845814_640 1.png'
// import logo from "../../assets/images/logo.png";
// import profile from '../../assets/images/man-1845814_640 1.png'
// import noti from '../../assets/images/notification.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const DSidebar = () => {
    return (
        <div className={styles.sideContainer}>
            {/* <header className="head container-fluid">
                <div className="name"><img src={logo} alt="logo" /></div>
                <span className="icons">
                    <a href="/"><img className="spacing img-fluid" src={profile} alt="profile-pic" /></a>
                    <a href="/"><img className="spacing img-fluid" src={noti} alt="bell-icon" /></a>
                    <a href="/"><img className="spacing img-fluid" src={noti} alt="exit-icon" /></a>
                </span>
            </header> */}
            {/* <ul className={styles.rectangle}>
            <li className={styles.link}><div className={styles.offset}></div></li>
            <li className={styles.link}><div className={styles.offset}></div><a href="/">Internship</a></li>
            <li className={styles.link}><div className={styles.offset}></div><a href="/">Application</a></li>
            <li className={styles.link}><div className={styles.offset}></div><a href="/">Document</a></li>
            <li className={styles.link}><div className={styles.offset}></div><a href="/">Setting</a></li>
            </ul> */}
            {/* <ul className={styles.rectangle}>
                <li className={styles.link}><NavLink className={styles.link1} exact activeClassName={styles.active} to="myaccount"><Link className={styles.linkcontent} smooth={true} duration={1000} to="myaccount">My Account</Link></NavLink></li>
                <li className={styles.link}><NavLink className={styles.link1} activeClassName={styles.active} to="myaccount"><Link className={styles.linkcontent} smooth={true} duration={1000} to="myaccount">Internship</Link></NavLink></li>
                <li className={styles.link}><NavLink className={styles.link1} activeClassName={styles.active} to="myaccount"><Link className={styles.linkcontent} smooth={true} duration={1000} to="myaccount">Application</Link></NavLink></li>
                <li className={styles.link}><NavLink className={styles.link1} activeClassName={styles.active} to="myaccount"><Link className={styles.linkcontent} smooth={true} duration={1000} to="myaccount">Document</Link></NavLink></li>
                <li className={styles.link}><NavLink className={styles.link1} activeClassName={styles.active} to="myaccount"><Link className={styles.linkcontent} smooth={true} duration={1000} to="myaccount">Setting</Link></NavLink></li>
                            
            </ul> */}
            <ul className={styles.rectangle}>
                <li className={styles.link}><Link className={styles.linkcontent} smooth={true} duration={100} to="myaccount"><a>My Account</a></Link></li>
                <li className={styles.link}><Link className={styles.linkcontent} smooth={true} duration={100} to="appstatus"><a>Application Status</a></Link></li>
                <li className={styles.link}><Link className={styles.linkcontent} smooth={true} duration={100} to="application"><a>Application</a></Link></li>
                <li className={styles.link}><Link className={styles.linkcontent} smooth={true} duration={100} to="document"><a>Document</a></Link></li>
                <li className={styles.link}><Link className={styles.linkcontent} smooth={true} duration={100} to="settings"><a>Setting</a></Link></li>
                            
            </ul> 

        </div>
    )
}
export default DSidebar;
