import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'

function TeamCard({ name }) {
    const [showPlayers, setShowPlayers] = useState(false)

    const handleClick = () => {
        
    }

  return (
    <Card className="text-center shadow-sm" onClick={handleClick}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Button
            variant="primary"
            size="sm"
            onClick={() => setShowPlayers(!showPlayers)}
        >
            {showPlayers ? "Hide Players" : "View Players"}
        </Button>

          {showPlayers && (
            <ul className="mt-3">
              {team.players.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          )}
      </Card.Body>
    </Card>
  )
}

export default TeamCard