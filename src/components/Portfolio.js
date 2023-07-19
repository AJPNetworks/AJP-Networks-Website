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

          <Card bg='dark' className="flex-card text-white">
              <Card.Header>Website</Card.Header>
              <Card.Body>
                <Card.Title>AJPN Website</Card.Title>
                <Card.Text>
                  Matter fact, the website you're looking at right now was built with ReactJS and the React Bootsrap framework.
                  You can also check out the source code to this site on my Github as well
                </Card.Text>
              </Card.Body>
              <p className='flex-card-status-text'>Last updated 2 days ago</p>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://github.com/AJPNetworks/AJP-Networks-Website' target='_blank'>Check it out</Button></Card.Footer>
            </Card>
          
            <Card bg='dark' className="flex-card text-white">
              <Card.Header>Website</Card.Header>
              <Card.Body>
                <Card.Title>AJP Networks Sharing</Card.Title>
                <Card.Text>
                AJPNS is a simple file uploading and sharing application that generates easily sharable links.
                I've spent many hours on this project and I plan to rewrite the entire frontend in the near future
                </Card.Text>
              </Card.Body>
              <p className='flex-card-status-text'>Last updated 2 days ago</p>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://share.ajp.network/' target='_blank'>Check it out</Button></Card.Footer>
            </Card>

            <Card bg='dark' className="flex-card text-white">
              <Card.Header>GitHub</Card.Header>
              <Card.Body>
                <Card.Title>DashLinx</Card.Title>
                <Card.Text>
                  This was a project I made and am still working that acts as a network wide dashboard inspired by another open source dashboard, Heimdall.
                  DashLinx is a great software that can hold many customizable shortcuts that can link to anything.
                </Card.Text>
                </Card.Body>
              <p className='flex-card-status-text'>Last updated 2 days ago</p>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://github.com/AJPNetworks/DashLinx' target='_blank'>Check it out</Button></Card.Footer>
            </Card>
            
            <Card bg='dark' className="flex-card text-white">
              <Card.Header>GitHub</Card.Header>
              <Card.Body>
                <Card.Title>Prox-Kiox</Card.Title>
                <Card.Text>
                  Prox-Kiox is a simple install script I created and have recieve great feedback on from a community full of pationate individuals over at HSVE.
                  This script allows anyone with a Proxmox hypervisor to be able to easily manage the entire system from th machine itself.
                </Card.Text>
              </Card.Body>
              <p className='flex-card-status-text'>Last updated 2 days ago</p>
              <Card.Footer className="text-muted"><Button variant="primary" href='https://github.com/AJPNetworks/Prox-Kiox' target='_blank'>Check it out</Button></Card.Footer>
            </Card>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    );
  }
  
  export default Portfolio;