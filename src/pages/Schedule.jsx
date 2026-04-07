import { Container, Table } from 'react-bootstrap'

function Schedule() {
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
          <tr>
            <td>Team A vs Team B</td>
            <td>May 20</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Schedule