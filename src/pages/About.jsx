import { Container, Card, Row, Col } from 'react-bootstrap'
import arena from '../assets/arena.png'

function About() {
  return (
    <Container>
      <Container className="mt-4">
        <h2>About the RLCS Paris Major</h2>
        <p>
          The RLCS Paris Major is one of the premier international Rocket League
          events, bringing together the top teams from around the world to compete
          for the championship title and crucial RLCS points.
        </p>
      </Container>

      <Container className="mt-4 text-center">
        <h3>Venue</h3>
        <img
          src={arena}
          alt="Paris La Défense Arena"
          className="img-fluid rounded mb-3"
        />
        <p>Paris La Défense Arena, France</p>
      </Container>

      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Europe</Card.Title>
              <Card.Text>Top EU teams compete on home turf.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>North America</Card.Title>
              <Card.Text>Strong NA contenders battle for dominance.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Other Regions</Card.Title>
              <Card.Text>SAM, OCE, and more bring global talent.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Container className="mt-4">
        <h3>Why It Matters</h3>
        <p>
          Teams earn RLCS points that determine qualification for the World Championship,
          making every match critical in the road to the biggest stage in Rocket League.
        </p>
      </Container>

    </Container>
  )
}

export default About