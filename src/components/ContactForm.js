import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or other desired actions
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (

    <div className="container py-5" id='contact'>
    <Card className='block-section'>
      <Card.Body className='block-section-body'>
        <Card.Title className="block-section-title">Contact Me</Card.Title>
        <Card.Text className="block-section-content">

          <Form className='contactForm' onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </Form.Group>
            <br />
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </Form.Group>
            <br />
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </Form.Group>
            <br />
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ContactForm;
