import React from "react";
import './AdminBooking.css';

function CustomerDetails({ formData, setFormData }) {
  return (
    <div className="customer-container">
      <input
        type="text"
        placeholder="Name"
        value={formData.user}
        onChange={(e) => {
          setFormData({ ...formData, user: e.target.value });
        }}
      />
      <input
        
        type="text"
        placeholder="Conatact No"
        value={formData.contact}
        onChange={(e) => {
          setFormData({ ...formData, contact: e.target.value });
        }}
      />
     
    </div>
  );
}

export default CustomerDetails;