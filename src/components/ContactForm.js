import React, { Component } from "react"
import {Form, Button} from 'react-bootstrap'
class ContactForm extends Component {
  render() {
    return (
      <div>
        <Form>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select">
              <option disabled selected >Choose service</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <Button type="submit">Submit form</Button>

        </Form>
      </div>
    )
  }
}

export default ContactForm
