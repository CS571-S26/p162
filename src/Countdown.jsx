import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"

function Countdown() {
  const calculateTimeLeft = () => {
    const eventDate = new Date("May 20, 2026 00:00:00")
    const now = new Date()
    const diff = eventDate - now

    if (diff <= 0) return null

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return <h4 className="text-center mt-4">The event has started!</h4>
  }

  return (
    <Container className="text-center mt-4">
      <h3>Event Starts In:</h3>
      <h4>
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
      </h4>
    </Container>
  )
}

export default Countdown