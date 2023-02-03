import React from "react";
import Header from "./components/Header";
import BusinessCard from "./components/BusinessCard";
import MainContent from "./components/MainContent"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// project below

export default function App() {
  return(

      <div>
        <Header />
        <Footer />
        <Routes>
          <Route path="/facts" element={<MainContent />}></Route>
          <Route path="/businesscard" element={<BusinessCard />} />
        </Routes>
      </div>
  );
}
