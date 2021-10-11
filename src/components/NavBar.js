import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";
import profile from '../assets/images/man-1845814_640 1.png'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    // <div>
    <>
      <div className="navContainer">

        <>
          <nav className="navContainer">

            <div className="logo">
              <Link to="/">
                <img src={logo} alt="PhotoShooto" />
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {
                clicked ? <FontAwesomeIcon clasName='fas fa-times' icon={faTimes} /> : <FontAwesomeIcon className='fas fa-bars' icon={faBars} />
              }
            </div>
            <div className={clicked ? 'nav-menu active' : 'nav-menu'}>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink activeClassName="active" to="/programs">
                Programs
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
              <NavLink activeClassName="active" to="/blog">
                Blog
              </NavLink>
              <NavLink activeClassName="active" to="/about">
                Contact
              </NavLink>
              <div className="navUser-mobile">

                <NavLink activeClassName="active" to="/dashboard">
                  <img className="profile" src={profile} alt="profile-pic" /> DashBoard
                </NavLink>
              </div>
            </div>
            <div className="navUser">

              <NavLink activeClassName="active" to="/dashboard">
                <img className="profile" src={profile} alt="profile-pic" />
              </NavLink>
            </div>
          </nav>
        </>
      </div>
      {/* <div className="navUser">
        <NavLink to="/login" className="loginInBtn">
          Login
        </NavLink>
        <NavLink to="/signup" className="signInLink">
          Create New Account?
        </NavLink>
      </div> */}
    </>

  );
};

export default NavBar;
