import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ViewBookings() {

  const[bookings,setBookings]=useState([]);
	
  useEffect(()=> {
    function getBookings(){
      axios.get("http://localhost:5000/displaybook").then((res) => {
        setBookings(res.data);
      }).catch((err)=>{
        alert(err.message)
      })
    }
    getBookings();

  },[])
	
	  
  
	return (

	  <div>
	<h1>All Bookings</h1>

	  </div>
	)
  }
  
  