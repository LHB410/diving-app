import React from "react";
import Info from "./Info";
import About from "./About"
import Interests from "./Interests";
import Socials from "./Socials";

export default function BusinessCard(){
  return(
    <div className="main-content">
      <div className="card-container">
        <div className="main-content-profile">
          <img src={require("../../images/profile.jpg")} alt="" />
        </div>
        <Info />
        <About />
        <Interests />
        <Socials />
       </div>
    </div>
  )
}
