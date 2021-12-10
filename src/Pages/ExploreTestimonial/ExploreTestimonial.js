import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Testimonial from '../Home/Testimonials/Testimonial';
import Header from '../Shared/Header/Header';

const ExploreTestimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/reviews')
        .then((res) => res.json())
        .then((data) => {
          setTestimonials(data);
        });
    }, []);
  return (
    <>
      <Header/>
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
      </>
  );
};

export default ExploreTestimonial;