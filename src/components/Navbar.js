import React from 'react';
import { NavLink } from 'react-router-dom';
import navi from '../images/navi.jpg';



function Navbar(){
    return <div className='navbar1'><div className='navbar'>
          <img src={navi} />
        
        <div className='navlink' >
            
        <NavLink activeClassName="active" className="link" to="/" >Home</NavLink>
        <NavLink activeClassName="active" className="link" to="/carlist" >CarList</NavLink>
        <NavLink activeClassName="active" className="link" to="/gallary" >Gallary</NavLink>
        <NavLink activeClassName="active" className="link" to="/aboutus" >AboutUs</NavLink>
        <NavLink activeClassName="active" className="link" to="/admin" >Admin</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink activeClassName="active" className="link" to="/Login" ><button className='lb'> Login </button>  </NavLink>
        <NavLink activeClassName="active" className="link" to="/aboutus" ><button className='lb'>SignUp</button></NavLink>
        
        </div>

  </div>  </div>;
}







export default Navbar;