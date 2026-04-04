import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import rlcsLogo from './assets/RLCS_2020_darkmode.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/teams">Teams</Link> |{" "}
        <Link to="/schedule">Schedule</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </>
  )
}

function Home() {
  return (
    <section id="center">
      <h1>Rocket League Paris Major</h1>
      <h2>Spring 2026</h2>
      <p>May 20-24 - Sign Up Now!</p>
    </section>
  )
}

function Teams() {
  return <h1>Teams Page</h1>
}

function Schedule() {
  return <h1>Schedule Page</h1>
}

export default App
