import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return(
    <div className="main-content-airbnb">
      <Navbar/>
      <Hero />
    </div>

  )
}
