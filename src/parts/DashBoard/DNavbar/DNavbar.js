import React from 'react'
import logo from "../../../assets/images/logo.png";
import profile from '../../../assets/images/man-1845814_640 1.png'
import noti from '../../../assets/images/notification.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from "react-router-dom";
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import styles from "./DNavbar.module.css";

const DNavbar = () => {
    return (
        <div>
            <nav className={styles.navContainer}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="PhotoShooto" />
                    </Link>
                </div>
                    <div className={styles.navLinks}>
                    <NavLink activeClassName="active" to="/">
                       <img className={styles.profile} src={profile}  alt="profile-pic" />
                    </NavLink>
                    <NavLink activeClassName="active" to="/contact">
                       <img className={styles.notification} src={noti}  alt="icon" />
                    </NavLink>
                    <NavLink activeClassName="active" to="/dashboard">
                      <FontAwesomeIcon icon={faSignOutAlt} size="3x" color=" #0E517B" />
                    </NavLink>
                </div>
            </nav>

        </div>
    )
}

export default DNavbar;
