import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Servicedetail from "./Components/Pages/Servicedetail";
import SkillsExperience from "./Components/Skills&experience";
import SkillsSection from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Testinomials from "./Components/Testinomials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* DEFAULT HOMEPAGE → ALL SECTIONS VISIBLE */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Services />
              <SkillsExperience />
              <SkillsSection />
              <Portfolio />
              <Testinomials />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* SERVICE DETAIL PAGE → ONLY NAVBAR VISIBLE */}
        <Route path="/service-detail" element={<Servicedetail />} />

        {/* Add more pages here if needed */}
        
      </Routes>
    </BrowserRouter>
  );
}
