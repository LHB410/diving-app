import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info(){
  return(
  <>
    <div className="main-content-info">
      <h1 id="name">Laura Brooks</h1>
      <h5>Full Stack Developer</h5>
      <a id="email" href="https://wwwlaurabrooks.codes">www.laurabrooks.codes</a>
    </div>
    <div className="info-buttons">
        <div className="button" id="email-button"><a className="button-text" href="laura@laurabrooks.codes"><FontAwesomeIcon icon={faEnvelope} />Email</a></div>
        <div className="button" id="linkedin-button"><a className="button-text" href="https://www.linkedin.com/in/laura-h-brooks/"><FontAwesomeIcon icon={faLinkedin} />LinkedIn</a></div>
    </div>
  </>
  )
}
