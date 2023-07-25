import React from "react";
import { 
    FaTwitter, 
    FaInstagram, 
    FaLinkedin 
} from "react-icons/fa";

import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="first-text">News Letter</span>
        <span className="second-text">
          Stay Connected for latest update and offers
        </span>
        <div className="form">
          <input type="text" placeholder="Email-Address" />
          <button>Subscribe</button>
        </div>
        <div className="text">Will be used in accordance our Privacy Policy</div>
        <div className="social-icons">
            <div className="icon">
                <FaTwitter size={14}/>
            </div> 
            <div className="icon">
                <FaInstagram size={14}/>
            </div>
            <div className="icon">
                <FaLinkedin size={14}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
