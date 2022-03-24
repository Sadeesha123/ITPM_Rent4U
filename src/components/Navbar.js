import React from 'react';
import { NavLink } from 'react-router-dom';


function Navbar(){
    return <div className='navbar'>
        <h1>Rent4U</h1>

        <div className='navlink'>
        <NavLink activeClassName="active" className="link" to="/" >Home</NavLink>
        <NavLink activeClassName="active" className="link" to="/carlist" >CarList</NavLink>
        <NavLink activeClassName="active" className="link" to="/gallary" >Gallary</NavLink>
        <NavLink activeClassName="active" className="link" to="/aboutus" >AboutUs</NavLink>
        <NavLink activeClassName="active" className="link" to="/admin" >Admin</NavLink>
        </div>

    </div>;
}







export default Navbar;