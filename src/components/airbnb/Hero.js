import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return(
    <div className="hero">
      <img src={require("../../images/hero_img.png")} alt="" />
      <div className="hero-text">
        <h1 className="cto">Online Experiences</h1>
        <h3 className="message">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </h3>
      </div>
    </div>
  )
}

