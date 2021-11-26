import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';



const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='container text-center mb-5 py-5'>
      <div className='row d-flex justify-content-center py-5'>
        <div className='col-12 col-md-10 col-lg-6'>
          <h5 className='primary-text'>Contact</h5>
          <h2
            className='primary-text'
            style={{ fontSize: '34px', fontWeight: '600' }}
          >
            Let us handle your project, professionally
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-5 contact-form'>
            <div className='row'>
              <div className='col-12 col-md-6 mb-4 pb-1'>
                <input
                  required
                  placeholder='First Name'
                  {...register('firstName')}
                />
              </div>
              <div className='col-12 col-md-6 mb-4 pb-1'>
                <input
                  required
                  placeholder='Last Name'
                  {...register('lastName')}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col-md-6 mb-4 pb-1'>
                <input
                  required
                  placeholder='Your Email'
                  type='email'
                  {...register('email')}
                />
              </div>
              <div className='col-12 col-md-6 mb-4 pb-1'>
                <input
                  required
                  placeholder='Phone Number'
                  type='text'
                  {...register('phone')}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <textarea
                  className='border-0'
                  rows='5'
                  placeholder='Your Message'
                  {...register('description', { required: true })}
                />
              </div>
            </div>

            <button type='submit' className='btn-luxury '>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
