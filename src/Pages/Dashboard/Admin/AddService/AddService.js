import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';

/*
 */

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const onSubmit = (data) => {
    fetch('http://localhost:5000/services', {
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
      <div className='col-12 col-md-10 col-lg-9 '>
        <div className='add-service box-shadow bg-white p-4 '>
          <h3 className='mb-5 heading-main'>Add a Service</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='col-12 d-md-flex'>
              <div className='w-100 '>
                <label htmlFor='name' className='mb-2'>
                  Service Title
                </label>
                <input
                  required
                  placeholder='Service Name'
                  {...register('name')}
                />
              </div>

              <div className='w-100 ps-0 ps-md-3'>
                <label htmlFor='name' className='mb-2'>
                  Price
                </label>
                <input
                  required
                  placeholder='Enter price'
                  {...register('price')}
                />
              </div>
            </div>
            <div className='col-12 '>
              <div className='w-100 '>
                <label htmlFor='image' className='mb-2'>
                  Image
                </label>
                <input required placeholder='Image Url' {...register('img')} />
              </div>

              <div className='w-100 '>
                <label htmlFor='description' className='mb-2'>
                  Description
                </label>
                <textarea
                  rows='4'
                  placeholder='Short description'
                  {...register('description', { required: true })}
                />
              </div>
            </div>
            <button
              type='submit'
              className='btn-luxury'
              style={{ marginLeft: `calc(100% - 115px)` }}
            >
              Submit
            </button>
            {success && (
              <Alert variant='success' className='mt-2 py-2'>
                Service added successfully
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
