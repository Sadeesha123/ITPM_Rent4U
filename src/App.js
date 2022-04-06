import {Route,Routes} from 'react-router-dom';
import { useEffect } from 'react';
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
        <Route path="/" element={<Homepage />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carmanagement" element={<Carmanagement />} />
      </Routes>
          </div>
  );
}

export default App;
