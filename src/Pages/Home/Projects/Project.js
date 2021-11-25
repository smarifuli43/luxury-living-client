import React from 'react';
import { Card } from 'react-bootstrap';

const Project = (props) => {
  const { name, img, location } = props.project;
  return (
    <div>
      <Card className='h-100 card border-0'>
        <Card.Img variant='top' src={img} height='450px' />
        <Card.Body>
          <Card.Title className='mb-2 fw-bold' style={{fontSize:'20px'}}>
            {name}
          </Card.Title>
          <Card.Text>
            <p className='secondary-text'>
              <i class='fas fa-map-marker-alt' style={{ color: '#251D58' }}></i>{' '}
              {location}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;