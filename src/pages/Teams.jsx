import { Container, Col, Row, Card } from 'react-bootstrap'
import TeamCard from '../TeamCard'

function Teams() {
  const teams = ["Karmine Corp", "Vitality", "Shopify Rebellion", "NRG", ]

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Qualified Teams</h2>

      <Row>
        {teams.map((team, i) => (
          <Col md={4} key={i} className="mb-3">
            <TeamCard name={team}/>
          </Col>
        ))}
      </Row>

    </Container>
  )  
}

export default Teams