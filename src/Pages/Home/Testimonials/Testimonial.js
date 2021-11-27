import React from 'react';
import Rating from 'react-rating';

const Testimonial = (props) => {
  const { name, role, review, rating, img } = props.testimonial;
  return (
    <div className=''>
      <div className='bg-white text-start p-3 rounded-3'>
        <div className='d-flex'>
          {img ? (
            <img
              src={img}
              alt=''
              width='50px'
              height='50px'
              className='rounded-circle'
            />
          ) : (
            <i class='fas fa-user rounded-circle' style={{fontSize:'45px'}}></i>
          )}

          <div className='d-flex flex-column justify-content-center ps-3'>
            <h6 className='my-0'>{name}</h6>
            <small>{role}</small>
          </div>
        </div>
        <p className='mt-3'>{review}</p>
        <Rating
          style={{ color: '#FFAC0C', fontSize: '20px' }}
          emptySymbol='fa fa-star-o '
          fullSymbol='fa fa-star '
          initialRating={rating}
          readonly
        />
      </div>
    </div>
  );
};

export default Testimonial;
