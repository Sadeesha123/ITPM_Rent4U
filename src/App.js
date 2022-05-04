import {Route,Routes} from 'react-router-dom';

import { useEffect } from 'react';

import './App.css';
import AboutUs from './components/aboutus.component';
import Admin from './components/admin.component';
import CarList from './components/carlist.component';
import Gallary from './components/gallary.component';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Slider from './pages/Slider';
import Login from './pages/Login';
import Register from './pages/Register';
import Homore from './pages/Homore';
import Lprofile from './pages/Lprofile';
import 'bootstrap/dist/css/bootstrap.min.css';


import Dashboard from "./pages/Dashboard";

import AdminBookings from './pages/AdminBookings';
import BrandManagement from './pages/BrandManagement';
import CancelledBookings from './pages/CancelledBookings';
import CarBookings from './pages/CarBookings';
import CarManagement from './pages/CarManagement';
import ConfirmedBookings from './pages/ConfirmedBookings';
import NewBookings from './pages/NewBookings';
import AdminDashboard from './pages/AdminDashboard';
import SideBar from './components/SideBar';
import User_Bookings from './pages/User_Bookings';



function App() {
  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8000/Carmanagement', {mode:'cors'});
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    makeAPICall();
  }, [])
  
  return (

    <div className="App">


     
<Navbar />

   <Routes>
     
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Homore" element={<Homore/>}/>
    <Route path="/Lprofile" element={<Lprofile/>}/>
    <Route path="/carlist" element={<CarList/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/gallary" element={<Gallary/>}/>
    <Route path="/admin" element={<Admin/>}/>  
    
    <Route path="/Login" element={<Login/>}/>
    <Route path="/User_Bookings" element={<User_Bookings/>}/>
    <Route path="/Register" element={<Register/>}/>
    

   </Routes>


 

  <SideBar>
   <Routes>
     <Route path="/admin-dashboard" element={<AdminDashboard />}/>
     
     <Route path="/admin-bookings" element={<AdminBookings />}/>
     <Route path="/Brand-management" element={<BrandManagement />}/>
     <Route path="/cancelled-bookings" element={<CancelledBookings />}/>
     <Route path="/car-bookings" element={<CarBookings />}/>
     <Route path="/confirmed-bookings" element={<ConfirmedBookings />}/>
     <Route path="/new-bookings" element={<NewBookings />}/>
     <Route path="/car-management" element={<CarManagement />}/>

     
  </Routes>
  </SideBar> 


   
    </div>

    

  );
}

export default App;
