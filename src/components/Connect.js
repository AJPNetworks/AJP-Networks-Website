import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


function SocialLinks() {
    return (
      <div className='social-icons-wrapper'>
        <a href="https://www.instagram.com/ajpnetworks" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='social-icon'/>
        </a>
        <a href="https://www.linkedin.com/in/alexander-phillipson-26699921a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className='social-icon'/>
        </a>
      </div>
    );
  }



function Connect() {
    return (
      <div className="container py-5" id='connect'>
      <Card className='block-section'>
        <Card.Body className='block-section-body'>
          <Card.Title className="block-section-title">Find Ways to Connect</Card.Title>
          <SocialLinks />
          <Card.Text className="block-section-content">
            

          <Card bg='dark' className="flex-card text-white">
              <Card.Header>Discord</Card.Header>
              <Card.Body>
                <Card.Title>Makers of Open Source Software (MOSS)</Card.Title>
                <Card.Text>
                  I own one of this one which I created to be a place for software developers to essentially come together and collaborate on their ideas and showcase their projects.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://discord.gg/3duy8ft7fm' target='_blank'>Join</Button></Card.Footer>
            </Card>
            
            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Discord</Card.Header>
              <Card.Body>
                <Card.Title>Harvey's Virtual Environment</Card.Title>
                <Card.Text>
                    Harvey's Virtual Environment (HSVE) is a community driven project as finding new ways to create 'Hackintoshes'.
                    The way we have found works well is through a virtual machine in Proxmox which allows for a great management and backup system.
                    HSVE Is a great community which not only does projects with Proxmox, but also offers an amazing place for community support on any topic.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://discord.gg/WGUdajWzxz' target='_blank'>Join</Button></Card.Footer>
            </Card>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
  }
  
  export default Connect;