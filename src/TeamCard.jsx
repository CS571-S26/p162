import { Card, Button } from 'react-bootstrap'
import { useState } from 'react'

function TeamCard({ team }) {
    const [showPlayers, setShowPlayers] = useState(false)

  return (
    <Card className="text-center shadow-sm">
      <Card.Body>
        <img 
            src={`${import.meta.env.BASE_URL}${team.logo}`}
            alt={team.name} 
            width="80" 
        />
        <Card.Title className="mt-2">{team.name}</Card.Title>

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