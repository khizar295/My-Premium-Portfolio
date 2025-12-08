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
import Project1 from "./Components/Pages/Project1";
import Project2 from "./Components/Pages/Project2";
import Project3 from "./Components/Pages/Project3";
import Project4 from "./Components/Pages/Project4";
import Project5 from "./Components/Pages/Project5";
import Project6 from "./Components/Pages/Project6";
import Project7 from "./Components/Pages/Project7";
import Project8 from "./Components/Pages/Project8";
import Project9 from "./Components/Pages/Project9";
import Project10 from "./Components/Pages/Project10";
import Project11 from "./Components/Pages/Project11";
import Project12 from "./Components/Pages/Project12";
import HirePage from "./Components/Pages/HirePage";
import HireContractForm from "./Components/Pages/HireContactForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
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

        <Route path="/service-detail" element={<Servicedetail />} />
        <Route path="/project-1" element={<Project1 />} />
        <Route path="/project-2" element={<Project2 />} />
        <Route path="/project-3" element={<Project3 />} />
        <Route path="/project-4" element={<Project4 />} />
        <Route path="/project-5" element={<Project5 />} />
        <Route path="/project-6" element={<Project6 />} />
        <Route path="/project-7" element={<Project7 />} />
        <Route path="/project-8" element={<Project8 />} />
        <Route path="/project-9" element={<Project9 />} />
        <Route path="/project-10" element={<Project10 />} />
        <Route path="/project-11" element={<Project11 />} />
        <Route path="/project-12" element={<Project12 />} />
        <Route path="/hire" element={<HirePage />} />
        <Route path="/hire-form" element={<HireContractForm />} />
        <Route path="/contactpage" element={<HirePage />} />
      </Routes>
    </BrowserRouter>
  );
}
