import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
  return (
  <div className="container py-5" id='about'>
    <Card className='block-section'>
      <Card.Body className='block-section-body'>
        <Card.Title className="block-section-title">About AJP Networks</Card.Title>
        <Card.Text className="block-section-content">
          {"AJP Networks LLC represents my personal brand as an independent software developer, encompassing all of my projects and creations. With a diverse range of skills and a passion for creating, I specialize in developing various software solutions, from simple scripts to more complex website backends."}<br />
          {"My expertise lies in PHP server-side scripting, where I feel most capable and confident. In addition, I have recently delved into ReactJS and Bash scripting, actively expanding my skills in these areas. Beyond software development, I also have a strong affinity for hardware, often immersing myself in enterprise hardware and software in my personal 'home lab' application."}
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  );
}

export default About;



