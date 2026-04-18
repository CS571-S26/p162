import { Container, Col, Row, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import TeamCard from '../TeamCard'

function Teams() {
  const [teams, setTeams] = useState([])
  const [region, setRegion] = useState("ALL")

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/teams.json`)
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [])

  const filtered =
    region === "ALL"
      ? teams
      : teams.filter(t => t.region === region)

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">Qualified Teams</h2>

      <div className="text-center mb-4">
        <Button onClick={() => setRegion("ALL")}>All</Button>{" "}
        <Button onClick={() => setRegion("EU")}>EU</Button>{" "}
        <Button onClick={() => setRegion("NA")}>NA</Button>
      </div>

      <Row>
        {filtered.map((team, i) => (
          <Col xs={12} sm={6} md={3} key={i} className="mb-4">
            <TeamCard team={team}/>
          </Col>
        ))}
      </Row>

    </Container>
  )  
}

export default Teams