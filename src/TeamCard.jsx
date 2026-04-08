import { Card } from 'react-bootstrap'

function TeamCard({ name }) {
  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default TeamCard