import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
  <div className="container py-5" id='about'>
    <Card className='block-section'>
      <Card.Body className='block-section-body'>
        <Card.Title className="block-section-title">About AJP Networks LLC</Card.Title>
        <Card.Text className="block-section-content">
          {"AJP Networks LLC is a software company that delivers tailor-made software solutions to businesses of all sizes. Our team of proficient software engineers and experienced project managers are adept at addressing complex challenges across various domains. We are committed to providing our clients with the highest quality of service and the most innovative solutions."}
          <br/>
          {"Currently, our company is specialized in web development, with a primary focus on creating dynamic and scalable web applications using ReactJS. We employ a versatile back-end strategy, utilizing both JavaScript and PHP, which is seamlessly integrated with HTML and CSS to deliver both aesthetic appeal and robust functionality. As we anticipate future growth, we are excited about the opportunity to diversify into other areas of software development. "}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}

export default About;



