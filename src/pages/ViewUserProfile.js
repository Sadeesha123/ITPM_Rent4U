import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './login.css';
import Cont from "../images/cont.png";
import printerest from "../images/printerest.png";
import Gle from "../images/gle.png";
import Twt from "../images/Twt.png";
import Youtb from "../images/Youtb.png";
import Facebk from "../images/faceb.png";
import In from "../images/in.png";

function Register ()  {
 
   
   
    return (
      <div>
          <body className="bx"><br/><br/>
          <style type="text/css" >
    { `.main-container {display:none}` }
</style>
<style type="text/css" >
    { `.sidebar {display:none}` }
</style>


  <div className="bx">
        <form >
        <div className="createpro"> 
        <br/>
             <div className="">
              <label  className="labelpro">Username</label>
              <input className="inputpro" type="text" name="username" placeholder="Username" />
            </div>
           
            <div className="">
              <label className="labelpro">NIC</label>
              <input className="inputpro" type="text" name="nic" placeholder="NIC" />
            </div> 

            <div className="">
              <label  className="labelpro">Email</label>
              <input className="inputpro" type="text" name="email" placeholder="Email" />
            </div>
            
            <div className="">
              <label  className="labelpro">Password</label>
              <input className="inputpro" type="password" id="myInput" name="password" placeholder="Password" />
             
            </div>
            <div className="">
             <label  className="labelpro">Re enter Password</label>
              <input className="inputpro"  type="password" name="repassword" />
              
            </div>            <hr/>
            
            <button type="submit" class="submitpro">Update</button>
            <button type="submit" class="submitpro">Delete</button><br/><br/>

     

            
          </div>
        </form> <br/> <br/></div>
        <br/> <br/> <br/> <br/> <br/>
        </body>
        
        <div className="footer">
 
        <div className="block1">
    
    <h4>Service</h4>
    <p>Rent4U is committed to provide compassionate care and excellent service that transcends conventional drives.</p><br/>
    Experience the freedom of travelling across Sri Lanka with the most affordable self-drive car rental options in the island. <br/>
    Plan your trip with our flexible rental plans and hire vehicles either on a short-term or a long-term basis.
  </div>
  
  
  <div className="block3">
  
    <h4>Contact us</h4>
    <p>rent4u@gmail.com</p>
  </div>
  
  <div className="ways">
  <a href="#"> <img src={Cont} width="60" height="30"/></a>
  <a href="https://www.pinterest.com"> <img src={printerest} width="30" height="30"/></a>
  <a href="https://myaccount.google.com"> <img src={Gle} width="30" height="30"/></a>
  <a href="https://twitter.com"> <img src={Twt} width="30" height="30"/></a>
  <a href="https://www.youtube.com/"><img src={Youtb} width="30" height="30"/></a>
  <a href="https://www.facebook.com"> <img src={Facebk} width="30" height="30"/></a>
  <a href="https://wwww.logging-in.com"><img src={In} width="30" height="30"/></a>
  </div>


</div>


      </div>
    );
  }
  
  export default Register;
  