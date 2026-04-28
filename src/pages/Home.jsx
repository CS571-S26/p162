import { Button, Container, Card, Tab, Tabs, Table } from 'react-bootstrap'
import { useState } from 'react'
import rlcsLogo from '../assets/RLCS_2020_darkmode.png'
import InfoTabs from '../InfoTabs'
import TicketForm from '../TicketForm'


function Home() {

  const [showForm, setShowForm] = useState(false)

  return (
    <Container className="text-center mt-5">
      <img src={rlcsLogo} width="330" height="93" alt="RLCS Logo"/>
      <h1>Rocket League Paris Major</h1>
      <h3>Spring 2026</h3>
      <p>May 20–24</p>
      <Button variant="outline-danger" onClick={() => setShowForm(true)}>
        Get Tickets Now!
      </Button>

      <h2 className="text-center mb-3">Official Announcement</h2>

      <Card className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/PrO_WmDgeko"
          title="RLCS Paris Major Announcement"
          allowFullScreen
        ></iframe>
      </Card>

      <InfoTabs/>

      <TicketForm show={showForm} handleClose={() => setShowForm(false)} />

    </Container>

    
  )
}

export default Home