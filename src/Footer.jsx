import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container className="text-center">

        <p>© 2026 RLCS Paris Major</p>

        <div>
          <a
            href="https://twitter.com/RLEsports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            Twitter
          </a>

          <a
            href="https://www.reddit.com/r/RocketLeagueEsports/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            Reddit
          </a>

          <a
            href="https://www.instagram.com/rlesports/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            Instagram
          </a>
        </div>

      </Container>
    </footer>
  )
}

export default Footer