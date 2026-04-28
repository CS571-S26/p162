import { useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"

function TicketForm({ show, handleClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tickets: 1
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Get Tickets</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!submitted ? (
          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Number of Tickets</Form.Label>
              <Form.Control
                type="number"
                name="tickets"
                min="1"
                max="10"
                value={form.tickets}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        ) : (
          <div className="text-center">
            <h5>Thanks, {form.name}!</h5>
            <p>Your ticket request has been submitted.</p>
          </div>
        )}
      </Modal.Body>
    </Modal>
  )
}

export default TicketForm