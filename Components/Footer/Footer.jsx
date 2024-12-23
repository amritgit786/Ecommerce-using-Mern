import React from "react";
import footer_logo from "../Assets/logo_big.png";
import insta_icon from "../Assets/instagram_icon.png";
import pininterest_icon from "../Assets/pintester_icon.png";
import whatsup_icon from "../Assets/whatsapp_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pininterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsup_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
