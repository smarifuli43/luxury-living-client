import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Home/Services/Service';
import Header from '../Shared/Header/Header';

const ExploreServices = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
     fetch('http://localhost:5000/services')
       .then((res) => res.json())
       .then((data) => {
         setServices(data);
       });
   }, []);
  return (
    <>
      <Header/>
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
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
      </div>
      </>
  );
};

export default ExploreServices;