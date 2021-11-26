import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [menustate, setMenuState] = useState(false);

  return (
    <div className='container-fluid'>
      <div className='wrapper'>
        <div
          className={
            menustate ? 'sidebar-wrapper toggle-sidebar' : 'sidebar-wrapper'
          }
        >
          <div className='d-flex flex-column px-2 position-relative'>
            <CloseButton
              onClick={() => setMenuState(false)}
              className=' position-absolute top-0 end-0 m-3 p-2 close-btn'
            />
            <Link to='/home' className='mt-5'>
              Home
            </Link>
            <Link to='/myorders'>My orders</Link>
            <Link to='/review'>Review</Link>
            <button className='btn-luxury me-3'>Logout</button>
          </div>
        </div>
        <div className='ps-3'>
          <button
            className='hamburger btn'
            onClick={() => setMenuState(!menustate)}
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </button>
          <h2>Dashboard home</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
