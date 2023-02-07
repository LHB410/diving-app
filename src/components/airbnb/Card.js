import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return(

    <div className="card">
      <img className="card-photo" src={require(`../../images/${props.img}`)} alt="experience" />
      <div className="card-stats">
        <FontAwesomeIcon id="star" icon={faStar}/>
        <span>{props.rating}</span>
        <span className="gray"> ({props.numberOfRatings}) - </span>
        <span className="gray">{props.country}</span>
      </div>
      <div className="card-text">
        <p>{props.title}</p>
        <p><strong>From {props.price}</strong> / person</p>
      </div>

    </div>

  )
}
