import {Route,Routes} from 'react-router-dom';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './components/aboutus.component';
import Admin from './components/admin.component';
import CarList from './components/carlist.component';
import Gallary from './components/gallary.component';
import Index from './components/index.component';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Slider from './pages/Slider';
import CarManagement from './pages/carmanagement';
import React from 'react';


function App() {
 
  return (
   <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/admin" element={<Admin />} />

      </Routes>
    </div>
 
  );
}

export default App;
