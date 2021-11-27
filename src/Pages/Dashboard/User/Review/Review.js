import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          reset();
        }
      });
  };
  return (
    <div className='row  d-flex justify-content-center '>
      <div className='col-12 col-md-10 col-lg-8 '>
        <div className='box-shadow admin bg-white p-4 '>
          <h3 className='mb-5 heading-main'>Give a review</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder='Service Name'
              {...register('name', { required: true })}
              defaultValue={user.displayName}
            />
            <input
              placeholder='Company’s name, Designation'
              {...register('role', { required: true })}
            />
            <input placeholder='your image URL' {...register('img')} />
            <input
              type='number'
              max='5'
              min='1'
              placeholder='Rate out of 5'
              {...register('rating', { required: true })}
            />

            <textarea
              rows='4'
              className='bg-white'
              placeholder='Your Reviews'
              {...register('review', { required: true })}
            />
            <button
              type='submit'
              className='btn-luxury'
              style={{ marginLeft: `calc(100% - 115px)` }}
            >
              Submit
            </button>
          </form>
        </div>
        {success && (
          <Alert variant='success' className='mt-2 py-2'>
            Service added successfully
          </Alert>
        )}
      </div>
    </div>
  );
};

export default Review;
