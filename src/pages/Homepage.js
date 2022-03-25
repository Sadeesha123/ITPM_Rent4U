import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import car1 from '../images/car1.png';
import car2 from '../images/car2.png';
import car3x from '../images/car3x.png';
import car4 from '../images/car4.png';
import service from '../images/service.png';
import Slider from "./Slider";
import dcar from '../images/dcar.jpg';





class Homepage extends React.Component {
  render() {
    return (
      <div>
                  
        <div>
          <head>
            <title>Rent4U Car Rental System</title>
          </head>
        </div>
        <body className="bodya">
          <br/><br/>
          <h1 className="heading">Your Trusted Car Rental Provider for your Upcoming Drives</h1>
          <br/>    <Slider/>
          
         
           <br/>
    <table >
      <tr>
        <th>   
<h2><b>WELCOME TO RENT4U</b></h2><br/>
<h3><b> PREMIER CAR RENTAL SERVICES <br/> IN SRI LANKA </b></h3>
<p> With over 30 years of experience in the industry, we strive to offer the highest
 levels of customer service <br/>
 and a highly personalised service to all our customers who are on 
 the lookout for Sri Lanka car rental opportunities,<br/>
  With one of the largest and most  modern and varied fleets in Sri Lanka, our service is backed by a networked front office,<br/>
 fully-fledged mechanical servicing and valet servicing onsite.</p>
 <Link to="/details">       <button className="details">More details</button></Link> 
 </th> <th><img src={car1} /></th>
 </tr>
 </table>  


          
          <div className="f1">
          <table >
      <tr>
        <th>     

<th>        <img src={service} /></th>
</th>
 <th><Link to="/tour">       <button className="view"> <img src={car2} /></button></Link></th>
 <th>
 <Link to="/wed">       <button className="view"> <img src={car3x} /></button></Link>
 </th>
 <th>
 <Link to="/drive">       <button className="view"> <img src={car4} /></button></Link>
 </th>
 </tr>
 </table> </div> <br/><br/><br/><br/><br/>
 <h2 className="head3"> DISCOVER SOME CARS</h2><br/>
<Link to=""><button className="dcar"><img src={dcar} className="dcar" /></button></Link>
<br/><br/>



        </body>
      </div>

    );
  }
}

export default Homepage;