import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
  return(
    <div className="socials">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebookSquare}/>
        <FontAwesomeIcon icon={faSquareInstagram} />
        <FontAwesomeIcon icon={faSquareGithub} />
    </div>
  )
}
