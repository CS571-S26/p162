import { Container, Col, Row, Card } from 'react-bootstrap'
import TeamCard from '../TeamCard'

function Teams() {
  const teams = ["Karmine Corp", "Vitality", "Shopify Rebellion", "NRG", ]

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Qualified Teams</h2>

      <Row>
        {teams.map((team, i) => (
          <Col xs={12} sm={6} md={3} key={i} className="mb-4">
            <TeamCard name={team}/>
          </Col>
        ))}
      </Row>

    </Container>
  )  
}

export default Teams