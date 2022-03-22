import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';

import Index from './components/index.component';
import CarList from './components/carlist.component';
import Gallary from './components/gallary.component';
import Admin from './components/admin.component';
import AboutUs from './components/aboutus.component';

class App extends Component{
  render(){
     return(
          <Router>
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                 <Link to={'/'} className="navbar-brand">Rent4U</Link>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav mr-auto">
                       <li className="nav-item">
                         <Link to={'/'} className="nav-link">Home</Link>
                       </li>
                       <li className="nav-item">
                         <Link to={'/index'} className="nav-link">Index</Link>
                       </li>
                   </ul>
                 </div> 
              </nav><br/>
            <h2>Welcome to Rent4U</h2><br/>
              <Routes>
                
                <Route path='/carlist' element={<CarList/>} />
                <Route path='/aboutus' element={<AboutUs/>} />
                <Route path='/admin' element={<Admin/>} />
                <Route path='/gallary' element={<Gallary/>} />
                <Route path='/index' element={<Index/>} />
              </Routes> 
            </div>
          </Router>
     );

  }
}

export default App;


