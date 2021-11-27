import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import logo from '../../../img/logo.png';
import useAuth from '../../../Hooks/useAuth';

const Dashboard = () => {
  const [menustate, setMenuState] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const signOut = () => {
    logout(navigate);
  };
  return (
    <div className='container-fluid' style={{ background: '#F4F7FC' }}>
      <div className='dashboard-header py-3 px-4 d-flex justify-content-between align-items-center'>
        <Link to='/home'>
          <img src={logo} alt='' style={{ width: '130px', height: '50px' }} />
        </Link>

        {user.displayName && <h5>{user.displayName}</h5>}
      </div>
      <div className='wrapper'>
        <div
          className={
            menustate
              ? 'sidebar-wrapper toggle-sidebar px-2 pt-2'
              : 'sidebar-wrapper px-2'
          }
        >
          <div className='d-flex flex-column px-2 position-relative'>
            <CloseButton
              onClick={() => setMenuState(false)}
              className=' position-absolute top-0 end-0 m-3 p-2  close-btn'
            />
            <Link to='/home' className='mt-5 text-secondary'>
              <span>
                <i className='fas fa-home me-2 f'></i>
              </span>
              Home
            </Link>
            <Link to='/dashboard' className='mt-3 text-secondary'>
              <span>
                <i className='fas fa-tools me-2 f'></i>
              </span>
              Dashboard
            </Link>
            <NavLink
              to='/dashboard/booking'
              className={({ isActive }) =>
                isActive ? 'active-dash mt-3' : 'mt-3 text-secondary'
              }
            >
              <span>
                <i className='fas fa-shopping-basket me-2 f'></i>
              </span>
              Booking List
            </NavLink>
            <NavLink
              to='/dashboard/review'
              className={({ isActive }) =>
                isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
              }
            >
              {' '}
              <span>
                <i className='far fa-comment-alt me-2 '></i>
              </span>
              Review
            </NavLink>
            <NavLink
              to='/dashboard/orders'
              className={({ isActive }) =>
                isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
              }
            >
              {' '}
              <span>
                <i className='fas fa-tasks me-2'></i>
              </span>
              Order list
            </NavLink>
            <NavLink
              to='/dashboard/addservice'
              className={({ isActive }) =>
                isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
              }
            >
              {' '}
              <span>
                <i className='fas fa-plus me-2'></i>
              </span>
              Add Service
            </NavLink>
            <NavLink
              to='/dashboard/makeadmin'
              className={({ isActive }) =>
                isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
              }
            >
              {' '}
              <span>
                <i className='fas fa-user-plus me-2'></i>
              </span>
              Make Admin
            </NavLink>
            <NavLink
              to='/dashboard/manageservice'
              className={({ isActive }) =>
                isActive ? 'active-dash mt-3' : 'mt-3  text-secondary'
              }
            >
              {' '}
              <span>
                <i className='fas fa-th-large me-2'></i>
              </span>
              Manage Service
            </NavLink>
            <button className='btn-dash mt-4 ' onClick={signOut}>
              <i className='fas fa-sign-out-alt me-2'></i>
              Logout
            </button>
          </div>
        </div>
        <div className='pb-5 pt-md-5 w-100 container'>
          <button
            className='hamburger btn mb-5'
            onClick={() => setMenuState(!menustate)}
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </button>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
