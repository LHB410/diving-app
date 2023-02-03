import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card() {
  return(
    <div className="card">
      <img className="card-photo" src={require("../../images/athlete.png")} alt="" />
      <div className="card-stats">
        <FontAwesomeIcon id="star" icon={faStar}/>
        <span>5.0</span>
        <span className="gray"> (6) - </span>
        <span className="gray">USA</span>
      </div>
      <div className="card-text">
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong> / person</p>
      </div>

    </div>
  )
}