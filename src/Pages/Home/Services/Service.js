import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
  const { name, price, description, img, _id } = props.service;
  return (
    <div>
      <Card className='h-100 card  px-2 py-3 service-card'>
        <Card.Img
          variant='top'
          src={img}
          style={{ height: '100px', width: '100px' }}
          className='mx-auto mb-2'
        />
        <Card.Body>
          <Card.Title className='mb-2 fw-bold' style={{ fontSize: '20px' }}>
            {name}
          </Card.Title>
          <Card.Text>
            <h5 style={{ fontSize: '18px' }} className='mb-2 fw-bold'>
              Price: ${price}
            </h5>
          </Card.Text>
          <Card.Text>
            <p className='secondary-text'>{description.slice(0, 120)}</p>
          </Card.Text>
          <Link to={`/booking/${_id}`}>
            <button
            className='btn btn-outline-dark py-2 shadow-sm'
            style={{ borderColor: '#251d58' }}
          >
            Booking
          </button>
          </Link>
          
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
