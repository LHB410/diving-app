import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./index.css"
// project below

function App() {
  return(
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
