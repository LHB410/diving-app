import React from "react";

export default function Joke(props) {
  return(
    <div className="joke-container">
      <h1>{props.setup}</h1>
      <h1>{props.punchline}</h1>
    </div>
  )
}
