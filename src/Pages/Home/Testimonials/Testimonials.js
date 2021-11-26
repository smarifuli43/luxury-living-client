import React, { useEffect, useState } from 'react';
import './Testimonial.css';
import Testimonial from './Testimonial';
import { Row } from 'react-bootstrap';

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
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial._id}
              testimonial={testimonial}
            ></Testimonial>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Testimonials;
