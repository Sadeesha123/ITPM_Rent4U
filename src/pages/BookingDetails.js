import React from "react";
import './AdminBooking.css';

function BookingDetails({ formData, setFormData }) {
  return (
    <div className="booking-container">
      <input
        type="text"
        placeholder="Handover Date"
        value={formData.handoverDate}
        onChange={(e) => {
          setFormData({ ...formData, handoverDate: e.target.value });
        }}
      />
      <input
        
        type="text"
        placeholder="Return Date"
        value={formData.returnDate}
        onChange={(e) => {
          setFormData({ ...formData, returnDate: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Handover Time"
        value={formData.handoverTime}
        onChange={(e) => {
          setFormData({ ...formData, handoverTime: e.target.value });
        }}
      />
    </div>
  );
}

export default BookingDetails;
