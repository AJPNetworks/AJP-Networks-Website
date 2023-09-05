import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';  // Import axios

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('Submit');

  const finalName = name || "Not Provided";
  const finalEmail = email || "Not Provided";
  const finalPhone = phone || "Not Provided";
  const finalMessage = message || "Not Provided";

  const handleSubmit = async (e) => {
    setSubmitStatus('Sending..');
    e.preventDefault();

    // Create form data
    const formData = {
      name: finalName,
      email: finalEmail,
      phone: finalPhone,
      message: finalMessage,
    };

    try {
      const response = await axios.post('https://ajp.network/api/contactForm.php', formData);
      console.log('Form submitted: ', response.data);
      setSubmitStatus('Message Sent!');
    } catch (error) {
      console.log('Error submitting form: ', error);
      setSubmitStatus('Error!');
    }

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
          <Card.Title className="block-section-title">Contact Us</Card.Title>
          <div className="block-section-content">
            <Form className='contactForm' onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Name (Required)' />
              </Form.Group>
              <br />
              <Form.Group controlId="formEmail">
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email (Required)' />
              </Form.Group>
              <br />
              <Form.Group controlId="formPhone">
                <Form.Control type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number' />
              </Form.Group>
              <br />
              <Form.Group controlId="formMessage">
                <Form.Control as="textarea" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='Message (Required)' />
              </Form.Group>
              <br />
              <Button variant="primary" type="submit">{submitStatus || 'Submit'}</Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
  
}

export default ContactForm;
