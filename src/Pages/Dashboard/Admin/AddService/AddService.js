import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();
  const onSubmit = (data) => {
    console.log(data);
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
    <div style={{ background: '#F4F7FC' }}>
      <div className='container py-5'>
        <div className='row  d-flex justify-content-center'>
          <div className='col-12 col-md-10 col-lg-8'>
            <div className='add-service bg-white p-4'>
              <h3 className='mb-4 heading-main'>Add a Service</h3>

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
                    <label htmlFor='image' className='mb-2'>
                      Image
                    </label>
                    <input
                      required
                      placeholder='Image Url'
                      {...register('img')}
                    />
                  </div>
                </div>
                <div className='col-12 col-md-6 p-0'>
                  <label htmlFor='description' className='mb-2'>
                    Description
                  </label>
                  <textarea
                    placeholder='Short description'
                    {...register('description', { required: true })}
                  />
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
      </div>
    </div>
  );
};

export default AddService;
