import React from 'react';
import { Card } from 'react-bootstrap';

const Project = (props) => {
  const { name, img, location } = props.project;
  return (
    <div>
      <Card className='h-100 card border-0'>
        <Card.Img
          variant='top'
          src={img}
          style={{ height: '400px', maxWidth: '400px' }}
          className='mx-auto'
        />
        <Card.Body>
          <Card.Title className='mb-2 fw-bold' style={{ fontSize: '20px' }}>
            {name}
          </Card.Title>
          <Card.Text>
            <p className='secondary-text'>
              <i
                className='fas fa-map-marker-alt'
                style={{ color: '#251D58' }}
              ></i>{' '}
              {location}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
