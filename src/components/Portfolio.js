import React from 'react';
import { Card } from 'react-bootstrap';


import Button from 'react-bootstrap/Button';

function Portfolio() {
    return (
      <div className="container py-5" id='portfolio'>
      <Card className='block-section'>
        <Card.Body className='block-section-body'>
          <Card.Title className="block-section-title">Developement Portfolio</Card.Title>
          <Card.Text className="block-section-content">
          
            
            <Card className="portfolio-card">
              <Card.Header>Website</Card.Header>
              <Card.Body>
                <Card.Title>AJP Networks Sharing</Card.Title>
                <Card.Text>
                  Simple file uploading and sharing application that generates easily sharable links
                </Card.Text>
                <Button variant="primary" href='https://share.ajp.network/' target='_blank'>Check it out</Button>
              </Card.Body>
              <Card.Footer className="text-muted">Last Updated 2 days ago</Card.Footer>
            </Card>

            
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
  }
  
  export default Portfolio;