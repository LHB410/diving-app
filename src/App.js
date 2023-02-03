import React from "react";
import Header from "./components/Header";
import BusinessCard from "./components/business_card/BusinessCard";
import MainContent from "./components/MainContent"
import AirBnb from "./components/airbnb/AirBnb";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

// project below

export default function App() {
  return(

      <div>
        <Header />
        <Footer />
        <Routes>
          <Route path="/facts" element={<MainContent />}></Route>
          <Route path="/businesscard" element={<BusinessCard />} />
          <Route path="/airbnb" element={<AirBnb />}></Route>
        </Routes>
      </div>
  );
}
