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

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='register' element={<Register />} />
            <Route path='add' element={<AddService/> }/>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
