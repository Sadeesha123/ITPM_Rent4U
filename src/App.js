import {Route,Routes} from 'react-router-dom';

import './App.css';
import AboutUs from './components/aboutus.component';
import Admin from './components/admin.component';
import CarList from './components/carlist.component';
import Gallary from './components/gallary.component';
import Index from './components/index.component';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Slider from './pages/Slider';
import Login from './pages/Login';
import Carmanagement from './components/carmanagement.component';
import 'bootstrap/dist/css/bootstrap.min.css';



import Dashboard from "./pages/Dashboard";
import AdminBookings from './pages/AdminBookings';
import BrandManagement from './pages/BrandManagement';
import CancelledBookings from './pages/CancelledBookings';
import CarBookings from './pages/CarBookings';
import CarManagement from './pages/CarManagement';
import ConfirmedBookings from './pages/ConfirmedBookings';
import NewBookings from './pages/NewBookings';

function App() {
  return (
    <div className="App">


     
<Navbar />

   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/carlist" element={<CarList/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/gallary" element={<Gallary/>}/>
    <Route path="/admin" element={<Admin/>}/>  
    <Route path="/Login" element={<Login/>}/>
    
    
   </Routes>


<Dashboard/>
   <Routes>
     <Route path="/" element={<Dashboard />}/>
     <Route path="/admin-bookings" element={<AdminBookings />}/>
     <Route path="/Brand-management" element={<BrandManagement />}/>
     <Route path="/cancelled-bookings" element={<CancelledBookings />}/>
     <Route path="/car-bookings" element={<CarBookings />}/>
     <Route path="/confirmed-bookings" element={<ConfirmedBookings />}/>
     <Route path="/new-bookings" element={<NewBookings />}/>
     <Route path="/car-managements" element={<CarManagement />}/>

   </Routes>

   
    </div>

    
  );
}

export default App;
