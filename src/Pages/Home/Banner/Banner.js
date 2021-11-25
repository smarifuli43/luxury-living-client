import React from 'react';
import heroImg from '../../../img/Image/hero.png';


const Banner = () => {
  return (
    <div
      style={{ background: '#F6F6F6', padding: '80px 0' }}
      className='py-lg-5'
    >
      <div className='container'>
        <div className='row d-flex align-items-center'>
          <div className='col-12 col-md-6'>
            <h1
              className='primary-text'
              style={{ fontSize: '60px', fontWeight: '700' }}
            >
              We Build Your Dream
            </h1>
            <p className='secondary-text mb-4'>
              Online Easte Agency, the mordern way to sell your own home, You
              can use Griffin Residential to market your property
            </p>
            <button className='btn-luxury'>Booking</button>
          </div>
          <div className='col-12 col-md-6 mt-5 mt-lg-0'>
            <img src={heroImg} alt='' className='img-fluid'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;