import { Button, Container, Card, Tab, Tabs } from 'react-bootstrap'
import rlcsLogo from '../assets/RLCS_2020_darkmode.png'


function Home() {
  return (
    <Container className="text-center mt-5">
      <img src={rlcsLogo} width="330" height="93" alt="RLCS Logo"/>
      <h1>Rocket League Paris Major</h1>
      <h3>Spring 2026</h3>
      <p>May 20–24</p>
      <Button variant="outline-danger">Get Tickets Now!</Button>

      <h2 className="text-center mb-3">Official Announcement</h2>

      <div className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/PrO_WmDgeko"
          title="RLCS Paris Major Announcement"
          allowFullScreen
        ></iframe>
      </div>

      <Card>
        <h2 className="text-center mb-3">Event Info</h2>

        <Tabs defaultActiveKey="overview" className="mb-3 justify-content-center">
          <Tab eventKey="overview" title="Overview">
            <p>RLCS Paris Major featuring top teams worldwide.</p>
          </Tab>

          <Tab eventKey="location" title="Location">
            <p>Paris La Défense Arena, France.</p>
          </Tab>

          <Tab eventKey="prize" title="Prize Pool">
            <p>$300,000 prize pool.</p>
          </Tab>
        </Tabs>
      </Card>

    </Container>

    
  )
}

export default Home