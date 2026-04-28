import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import MatchCard from "../MatchCard"

// const groupMatches = [
//   { id: 1, teamA: "Karmine Corp", teamB: "NRG" },
//   { id: 2, teamA: "Vitality", teamB: "Gen.G" }
// ]

function Pickems() {
  const [results, setResults] = useState({})

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
              teamA: teams[i].name,
              teamB: teams[j].name,
              group: teams[i].group,
              id: `${i}-${j}`
            })
          }
        }
      }
      return matches;
    }
  
    const allMatches = generateMatchups()

  const handlePick = (id, winner) => {
    setResults(prev => ({ ...prev, [id]: winner }))
  }

  const winners = Object.values(results)

  return (
    <Container className="mt-4">
      <h2>Group Stage Predictions</h2>

      {allMatches.map(match => (
        <MatchCard
          key={match.id}
          match={match}
          onPick={handlePick}
          selected={results[match.id]}
        />
      ))}

      {winners.length === allMatches.length && (
        <>
          <h3 className="mt-5">Bracket Stage</h3>

          <MatchCard
            match={{ id: "final", teamA: winners[0], teamB: winners[1] }}
            onPick={handlePick}
            selected={results["final"]}
          />
        </>
      )}
    </Container>
  )
}

export default Pickems