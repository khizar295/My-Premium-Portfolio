import React from 'react'
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

export default function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Services/>
      <SkillsExperience />
      <SkillsSection/>
      <Portfolio/>
    </>
  )
}
