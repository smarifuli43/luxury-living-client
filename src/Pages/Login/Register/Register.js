import React from 'react';
import { useNavigate} from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import { useForm } from 'react-hook-form';
import './Register.css';
import { Link } from 'react-router-dom';
import googleLogo from '../../../img/google-color.svg'
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
  const navigate = useNavigate();
  const { createNewUser, signInWithGoogle, signInWithFacebook } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => handleCreateNewUser(data);
  
  const handleCreateNewUser = (user) => {
    const { email, password, firstName, lastName } = user;
    const displayName = `${firstName} ${lastName}`
    createNewUser(email, password, displayName, navigate);
    reset();
  }

  const googleSignIn = () => {
    signInWithGoogle();
  }
  const facebookSignIn = () => {
    signInWithFacebook();
  }

  return (
    <>
      <Header />
      <div className='container my-5'>
        <div className='row d-flex justify-content-center '>
          <div
            className='col-10 col-md-8 col-lg-5 data-form'
            style={{
              border: '1px solid #ABABAB',
              borderRadius: '4px',
              padding: '30px 50px',
            }}
          >
            <h3 className='mb-4' style={{ fontWeight: 600 }}>
              Create an account
            </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                required
                placeholder='First Name'
                {...register('firstName')}
              />
              <input
                required
                placeholder='Last Name'
                {...register('lastName')}
              />
              <input
                required
                placeholder='Your Email'
                type='email'
                {...register('email')}
              />
              <input
                required
                placeholder='Password'
                type='password'
                {...register('password')}
              />

              <button type='submit' className='btn-luxury w-100'>
                Create an account
              </button>
            </form>
            <p className='text-center mt-2 mb-0'>
              Already have an account?{' '}
              <span>
                {' '}
                <Link to='/login' className='text-decoration-underline '>
                  Login
                </Link>{' '}
              </span>
            </p>
          </div>
        </div>
        <div className='row d-flex justify-content-center px-md-5'>
          <div className='col-10 col-md-8 col-lg-5 text-center'>
            <div className=' d-flex justify-content-center my-3 mx-2 align-items-center'>
              <span className='hl'></span>
              <h5>Or</h5>
              <span className='hl'></span>
            </div>
            <button
              className='d-flex justify-content-between bg-transparent rounded-pill p-2 w-100'
              style={{ border: '1px solid #C7C7C7' }}
              onClick={googleSignIn}
            >
              <img src={googleLogo} alt='' style={{ width: '28px' }} />
              <span className='pe-1 pe-md-5'>Continue with Google</span>
            </button>
            <button
              className='d-flex justify-content-between bg-transparent rounded-pill p-2 w-100 mt-3'
              style={{ border: '1px solid #C7C7C7' }}
              onClick={facebookSignIn}
            >
              <i class='fab fa-facebook fs-2' style={{ color: '#3076FF' }}></i>
              <span className='pe-1 pe-md-5'>Continue with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
