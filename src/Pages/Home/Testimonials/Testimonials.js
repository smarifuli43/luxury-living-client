import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import Testimonial from './Testimonial';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/reviews')
        .then((res) => res.json())
        .then((data) => {
          setTestimonials(data);
        });
    }, []);

  return (
    <div className='py-5' style={{ background: '#F6F6F6' }}>
      <div className='container text-center py-5'>
        <h2
          className='primary-text'
          style={{ fontSize: '34px', fontWeight: '600' }}
        >
          Testimonials
        </h2>
        <Row xs={1} md={2} lg={3} className='g-4 mt-4'>
          {testimonials.slice(0, 6).map((testimonial) => (
            <Testimonial
              key={testimonial._id}
              testimonial={testimonial}
            ></Testimonial>
          ))}
        </Row>
        <Link to='/exploretestimonial'>
          <button className='mt-5 btn-luxury'>Explore more</button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
