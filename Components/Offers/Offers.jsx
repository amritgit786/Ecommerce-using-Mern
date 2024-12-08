import React from "react";
import "./Offers.css";
import exclusive_img from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Execlusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Chek Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
};

export default Offers;