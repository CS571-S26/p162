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
        matches.push({
          home: teams[i].name,
          away: teams[j].name,
          id: `${i}-${j}`
        });
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
            <th>Match</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {allMatches.map((match, index) => (
            <tr key={match.id}>
              <td>{index + 1}</td>
              <td>
                <strong>{match.home}</strong> vs <strong>{match.away}</strong>
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>Team A vs Team B</td>
            <td>May 20</td>
          </tr> */}
        </tbody>
      </Table>
    </Container>
  )
}

export default Schedule