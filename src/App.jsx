import React from 'react'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import './Components/Navbar'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import SkillsExperience from './Components/Skills&experience'
import SkillsSection from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Testinomials from './Components/Testinomials'

export default function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Home />
      <Services/>
      <SkillsExperience />
      <SkillsSection/>
      <Portfolio/>
      <Testinomials/>
      </BrowserRouter>
    </>
  )
}
