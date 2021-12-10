import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import AddService from './Pages/Dashboard/Admin/AddService/AddService';
import ExploreServices from './Pages/ExploreServices/ExploreServices';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';

import Review from './Pages/Dashboard/User/Review/Review';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import Orders from './Pages/Dashboard/Admin/Orders/Orders';
import ManageService from './Pages/Dashboard/Admin/ManageService/ManageService';
import ExploreTestimonial from './Pages/ExploreTestimonial/ExploreTestimonial';
import BookingList from './Pages/Dashboard/User/BookingList/BookingList';
import Booking from './Pages/Booking/Booking';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route
              path='dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path={'/dashboard'} element={<DashboardHome />}></Route>
              <Route path='booking' element={<BookingList />}></Route>
              <Route path='addservice' element={<AddService />}></Route>
              <Route path='makeadmin' element={<MakeAdmin/>}></Route>
              <Route path='orders' element={<Orders/>}></Route>
              <Route path='manageservice' element={<ManageService/>}></Route>
              <Route path='review' element={<Review/>}></Route>
            </Route>
            <Route
              path='booking/:id'
              element={
                <PrivateRoute>
                 <Booking/>
                </PrivateRoute>
              }
            ></Route>
            <Route path='register' element={<Register />} />
            <Route path='exploreservices' element={<ExploreServices />} />
            <Route path='exploretestimonial' element={<ExploreTestimonial/>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
