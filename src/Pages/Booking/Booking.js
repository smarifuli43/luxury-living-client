import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import './Booking.css';

const Booking = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [id]);
  const { name, img, description, price } = services;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const payment = 'unpaid';
    const status = 'pending';
    const order = { ...data, payment, status };
    console.log(order);
    fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          reset();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
      });
  };
  return (
    <div>
      <Header />
      <div className='container my-5 box-shadow p-4'>
        <div className='row d-flex align-items-center'>
          <div className='col-12 col-md-6'>
            <img src={img} alt='' />
          </div>
          <div className='col-12 col-md-6 mt-4 mt-md-0'>
            <h3>{name}</h3>
            <h5>Price: ${price}</h5>
            <h6 className='mt-4'>Product Details:</h6>
            <p>{description}</p>
          </div>
          <Link to=''></Link>
        </div>
        <hr />
        <div className='row mt-5'>
          <div className='col-12 col-md-6 booking'>
            <h4 className='mb-3'>Edit Delivery details:</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder='Your Name'
                {...register('name', { required: true })}
                defaultValue={user.displayName}
              />

              <input
                type='email'
                placeholder='Your Email'
                {...register('email', { required: true })}
                defaultValue={user.email}
              />

              <input
                placeholder='Your address'
                {...register('address', { required: true })}
              />
              <input
                placeholder='Your Phone Number'
                {...register('phoneNumber', { required: true })}
              />

              <input
                type='number'
                placeholder='Quantity'
                {...register('quantity', { required: true })}
              />

              <button
                type='submit'
                variant='contained'
                className='btn-luxury w-100'
              >
                Confirm Order
              </button>
            </form>
            {success && (
              <Alert variant='success' className='mt-2 py-2'>
                Order success
              </Alert>
            )}
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
            <h3 className=' mt-5 mt-md-0'>Payment system coming soon!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
