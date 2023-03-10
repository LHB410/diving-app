import React from "react";
import Card from "./Card";
import Hero from "./Hero";
import Navbar from "./Navbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return(
    <div className="main-content-airbnb">
      <Navbar/>
      <Hero />
      <Card
        img="athlete.png"
        rating="5.0"
        numberOfRatings={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>

  )
}
