import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from './Service';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className='container text-center mb-5 py-5'>
      <h5 className='primary-text'>Services</h5>
      <h2
        className='primary-text'
        style={{ fontSize: '34px', fontWeight: '600' }}
      >
        We're an agency tailored to all clients' <br /> needs that always
        delivers
      </h2>
      <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
        {services.slice(0, 3).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
      <Link to='/exploreservices'>
        <button className='mt-5 btn-luxury'>Explore more</button>
      </Link>
    </div>
  );
};

export default Services;
