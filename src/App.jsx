import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import rlcsLogo from './assets/RLCS_2020_darkmode.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/teams">Teams</Link> |{" "}
        <Link to="/schedule">Schedule</Link>
        <Link to="/about">About</Link> |{" "}
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />
      </Routes>
    
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">RLCS Paris</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
            <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

function Home() {
  return (
    <section id="center">
      <img src={rlcsLogo} width="300" height="100" alt="RLCS Logo"/>
      <h1>Rocket League Paris Major</h1>
      <h2>Spring 2026</h2>
      <p>May 20-24 - Sign Up Now!</p>
    </section>
  )
}

function Teams() {
  return <div>
    <h1>Teams Page</h1>
    <h2></h2>
  </div>
    
}

function Schedule() {
  return <h1>Schedule Page</h1>
}

function About() {
  return <div>
    <h1>Bienvenue à Paris!</h1>
    <p>The top teams of all around the world meet at Paris La Défense Arena to compete for the title of Rocket League Championship Series Major Champions.</p>
  </div>
}

export default App
