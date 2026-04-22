import { Button, Container, Card, Tab, Tabs, Image } from 'react-bootstrap'
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

      <Card className="ratio ratio-16x9">
        <iframe
          src="https://www.youtube.com/embed/PrO_WmDgeko"
          title="RLCS Paris Major Announcement"
          allowFullScreen
        ></iframe>
      </Card>

      <Card>
        <h2 className="text-center mb-3">Event Info</h2>

        <Tabs defaultActiveKey="overview" className="mb-3 justify-content-center">
          <Tab eventKey="overview" title="Overview">
            <h1>RLCS Paris Major featuring top teams worldwide.</h1>
            <img src='../assets/m8swin.png'/>
            <p>The second major event of the RLCS 2026 season as these top 16 teams in the world seek to prove their skill at a major stage.</p>
            <p>Along with prize pool, the teams are also competeting to acrue RLCS points to gain themselves qualification into the largest stage in Rocket League, the World Championship.</p>
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