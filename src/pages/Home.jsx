import { Button, Container } from 'react-bootstrap'
import rlcsLogo from '../assets/RLCS_2020_darkmode.png'


function Home() {
  return (
    <Container className="text-center mt-5">
      <img src={rlcsLogo} width="300" height="100" alt="RLCS Logo"/>
      <h1>Rocket League Paris Major</h1>
      <h3>Spring 2026</h3>
      <p>May 20–24</p>
      <Button variant="primary">Sign Up</Button>
    </Container>
  )
}

export default Home