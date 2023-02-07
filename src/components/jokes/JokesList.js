import React from "react";
import Joke from "./Joke"
import jokesData from "./jokesData";

export default function JokesList() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
  })
  return(
    <div className="main-content">
      <h1 className="title">One Liners</h1>
      {jokeElements}
    </div>
  )
}
