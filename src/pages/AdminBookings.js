import React, { useState } from "react";
import VehicleDetails from "./VehicleDetails";
import CustomerDetails from "./CustomerDetails";
import BookingDetails from "./BookingDetails";





const AdminBookings = () => {

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    brand: "",
    vehicle: "",
    user: "",
    contact: "",
    handoverDate: "",
    returnDate: "",
    handoverTime: "",
  });

  const FormTitles = ["Vehicle Details", "Customer Details", "Booking Details"];

  const PageDisplay = () => {
    if (page === 0) {
      return <VehicleDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <CustomerDetails formData={formData} setFormData={setFormData} />;
    } else {
      return <BookingDetails formData={formData} setFormData={setFormData} />;
    }
  };





    return <div className="title">
      
      
      <style type="text/css" >
        { `.navlink {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar1 {display:none}` }
    </style>


    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="bodyl">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("BOOKING SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    
    
    
    </div>;
  };
  
  export default AdminBookings;
  