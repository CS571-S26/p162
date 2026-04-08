import { Card } from 'react-bootstrap'

function TeamCard({ name }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default TeamCard