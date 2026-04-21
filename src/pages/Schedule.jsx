import { Container, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'

function Schedule() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/teams.json`)
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [])

  const generateMatchups = () => {
    const matches = [];
    for (let i = 0; i < teams.length; i++) {
      for (let j = i + 1; j < teams.length; j++) {
        if (teams[i].group === teams[j].group) {
          matches.push({
            home: teams[i].name,
            away: teams[j].name,
            group: teams[i].group,
            id: `${i}-${j}`
          });
        }
      }
    }
    return matches;
  }

  const allMatches = generateMatchups();

  return (
    <Container className="mt-4">
      <h2>Schedule</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Group</th>
            <th>Matchup</th>
          </tr>
        </thead>
        <tbody>
          {allMatches.map((match) => (
            <tr key={match.id}>
              <td>
                <span className="badge bg-primary">Group {match.group}</span>
              </td>
              <td>
                <strong>{match.home}</strong> vs <strong>{match.away}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default Schedule