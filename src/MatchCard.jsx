import { Card, Button } from "react-bootstrap"

function MatchCard({ match, onPick, selected }) {
  return (
    <Card className="mb-3 text-center">
      <Card.Body>
        <h5>{match.teamA} vs {match.teamB}</h5>

        <Button
          variant={selected === match.teamA ? "success" : "outline-primary"}
          onClick={() => onPick(match.id, match.teamA)}
          className="m-1"
        >
          {match.teamA}
        </Button>

        <Button
          variant={selected === match.teamB ? "success" : "outline-primary"}
          onClick={() => onPick(match.id, match.teamB)}
          className="m-1"
        >
          {match.teamB}
        </Button>
      </Card.Body>
    </Card>
  )
}

export default MatchCard