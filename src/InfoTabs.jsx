import { Card, Tab, Tabs, Table } from 'react-bootstrap'

function InfoTabs() {
    return (
        <Card>
        <h2 className="text-center mb-3">Event Info</h2>

        <Tabs defaultActiveKey="overview" className="mb-3 justify-content-center">
          <Tab eventKey="overview" title="Overview">
            <h1>RLCS Paris Major featuring top teams worldwide.</h1>
            <img src={m8swin} width="400" height="270" alt="Fall 2026 Major Winners"/>
            <p>The second major event of the RLCS 2026 season as these top 16 teams in the world seek to prove their 
              skill at a major stage with the goal of being major champions.
            </p>
            <p>Along with prize pool, the teams are also competeting to acrue RLCS points to gain themselves 
              qualification into the largest stage in Rocket League, the World Championship.
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Place</th>
                  <th>RLCS Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1st</th>
                  <th>36</th>
                </tr>
                <tr>
                  <th>2nd</th>
                  <th>24</th>
                </tr>
                <tr>
                  <th>3rd - 4th</th>
                  <th>16</th>
                </tr>
                <tr>
                  <th>5th - 6th</th>
                  <th>12</th>
                </tr>
                <tr>
                  <th>7th - 8th</th>
                  <th>8</th>
                </tr>
                <tr>
                  <th>9th - 12th</th>
                  <th>6</th>
                </tr>
                <tr>
                  <th>13th - 16th</th>
                  <th>4</th>
                </tr>
              </tbody>
            </Table>
          </Tab>

          <Tab eventKey="location" title="Location">
            <p>Paris La Défense Arena, France.</p>
            <p>
              Paris La Défense Arena is Europe's largest indoor multi-purpose venue, 
              inaugurated in October 2017 in Nanterre, west of Paris. 
              As the home of Racing 92 rugby club, it holds up to 30,681 spectators for matches and up to 45,000 for concerts. 
              The arena, designed by Christian de Portzamparc, features a massive, modular, and technologically advanced design, 
              and was home to various events in the 2024 Summer Olympics.
            </p>
            <img src={arena} width="370" height="280" alt="Venue pictured from the outside"/>
            <img src={arena2} width="400" height="300" alt="Venue from inside during League of Legends World Championship."/>
          </Tab>

          <Tab eventKey="prize" title="Prize Pool">
            <p>$300,000 prize pool distributed to all competitors.</p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Place</th>
                  <th>$ USD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1st</th>
                  <th>$102,000</th>
                </tr>
                <tr>
                  <th>2nd</th>
                  <th>$51,000</th>
                </tr>
                <tr>
                  <th>3rd - 4th</th>
                  <th>$36,000</th>
                </tr>
                <tr>
                  <th>5th - 6th</th>
                  <th>$22,500</th>
                </tr>
                <tr>
                  <th>7th - 8th</th>
                  <th>$15,000</th>
                </tr>
                <tr>
                  <th>9th - 12th</th>
                  <th>$9,000</th>
                </tr>
                <tr>
                  <th>13th - 16th</th>
                  <th>$4,500</th>
                </tr>
              </tbody>
            </Table>
            <img src={nrgchamp} width="400" height="300" alt="NRG winning 2025 World Championship."/>
          </Tab>
        </Tabs>
      </Card>
    )
}

export default InfoTabs