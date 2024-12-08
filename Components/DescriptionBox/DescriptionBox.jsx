import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          officiis ullam iure ipsa qui, quo cupiditate ipsam! Debitis placeat
          facilis fuga labore recusandae nostrum voluptatum tenetur dolor
          dignissimos, veniam praesentium iure neque ipsam inventore suscipit
          distinctio a mollitia ea nulla culpa magni rerum saepe est hic. Quis
          sed perspiciatis aperiam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nesciunt
          iste rem soluta rerum nemo, ipsam facilis, natus laudantium repellat
          incidunt alias laboriosam enim quis, sed eaque praesentium dolorem
          eligendi!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
