import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import rlcsLogo from './assets/RLCS_2020_darkmode.png'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Nav, Navbar, Button, Container, Row, Col, Card, Table } from 'react-bootstrap'

import Home from './pages/Home'
import Teams from './pages/Teams'
import Schedule from './pages/Schedule'
import About from './pages/About'
import Pickems from './pages/Pickems'
import Footer from './Footer'

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/teams">Teams</Link> |{" "}
        <Link to="/schedule">Schedule</Link>
        <Link to="/about">About</Link> |{" "}
      </nav> */}
    
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">RLCS Paris</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/teams">Teams</Nav.Link>
            <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
            <Nav.Link as={Link} to="/pickems">Pickems</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/pickems" element={<Pickems />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer/>
    </>
  )
}

// function Home() {
//   return (
//     <Container className="text-center mt-5">
//       <img src={rlcsLogo} width="300" height="100" alt="RLCS Logo"/>
//       <h1>Rocket League Paris Major</h1>
//       <h3>Spring 2026</h3>
//       <p>May 20–24</p>
//       <Button variant="primary">Sign Up</Button>
//     </Container>
//   )
// }

// function Teams() {
//   const teams = ["Karmine Corp", "Vitality", "Shopify Rebellion", "NRG", ]

//   return (
//     <Container className="mt-4">
//       <h2 className="mb-4">Qualified Teams</h2>

//       <Row>
//         {teams.map((team, i) => (
//           <Col md={4} key={i} className="mb-3">
//             <Card>
//               <Card.Body>
//                 <Card.Title>{team}</Card.Title>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//     </Container>
//   )  
// }

// function Schedule() {
//   return (
//     <Container className="mt-4">
//       <h2>Schedule</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Match</th>
//             <th>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Team A vs Team B</td>
//             <td>May 20</td>
//           </tr>
//         </tbody>
//       </Table>
//     </Container>
//   )
// }

// function About() {
//   return (
//     <Container className="mt-4">
//       <h1>Bienvenue à Paris!</h1>
//       <p>
//         The top teams from around the world meet at Paris La Défense Arena
//         to compete for the RLCS Major title.
//       </p>
//     </Container>
//   )
// }

export default App
