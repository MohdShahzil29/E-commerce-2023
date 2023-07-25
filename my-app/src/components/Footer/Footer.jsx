import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payments from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About us</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            animi praesentium distinctio quos, minima fugit enim labore
            exercitationem. Laboriosam, culpa?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact us</div>
          <div className="c-icon">
            <FaLocationArrow />
            <div className="text">
              Sitargnj Udham Singh Nagar Near by NanakMatta
            </div>
          </div>
          <div className="c-icon">
            <FaMobileAlt />
            <div className="text">Phone: +919027800636</div>
          </div>
          <div className="c-icon">
            <FaEnvelope />
            <div className="text">Email: MohdShahzil59@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">HeadPhones</span>
          <span className="text">Smart Watch</span>
          <span className="text">Blutooth Speakers</span>
          <span className="text">Home Thetatre</span>
          <span className="text">Projecters</span>
          <span className="text">Mobile</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Homn</span>
          <span className="text">About us</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms and Condiditon</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottom-bar-content">
        <div className="bottom-bar">
          <div className="text">MSMSTORE 2023 CREATED BY MOHD SHAHZIL</div>
          <img src={payments} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
