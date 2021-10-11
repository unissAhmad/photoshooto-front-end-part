import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footerContainer">
        <div className="footerSocial">
          <Link to="#">
            <i className="icon ion-social-facebook"></i>
          </Link>
          <Link to="#">
            <i className="icon ion-social-twitter"></i>
          </Link>
          <Link to="#">
            <i className="icon ion-social-pinterest"></i>
          </Link>
          <Link to="#">
            <i className="icon ion-social-instagram"></i>
          </Link>
        </div>

        <ul class="footerList-inline">
          <li class="footerList-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li class="footerList-inline-item">
            <Link to="/programs">Program</Link>
          </li>
          <li class="footerList-inline-item">
            <Link to="#">Domain</Link>
          </li>
          <li class="footerList-inline-item">
            <Link to="#">Seats</Link>
          </li>
          <li class="footerList-inline-item">
            <Link to="#">Privacy Policy</Link>
          </li>
        </ul>
        <ul class="footerList-inline my-2">
          <li class="footerList-inline-item">
            <Link to="/contact">
              Contact<span class="ms-4">|</span>
            </Link>
          </li>
          <li class="footerList-inline-item">
            <Link to="/about">
              About<span class="ms-4">|</span>
            </Link>
          </li>
          <li class="footerList-inline-item">
            <Link to="#">Blogs</Link>
          </li>
        </ul>

        <div class="footer footertext">
          <h2 class="copyrightsymbol">&copy;</h2> 
          <p claas="footerheading"> Copyright Photoshooto internship 2020-21</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
