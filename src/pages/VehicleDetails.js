import React from "react";
import './AdminBooking.css';

function VehicleDetails({ formData, setFormData }) {
  return (
    <div className="vehicle-container">

      <div class="dropdown" placeholder="Brand"
      value={formData.brand}
      onChange={(event) =>
        setFormData({ ...formData, brand: event.target.value })
      }
      >

        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Vehicle Brand
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    
      <input
        type="text"
        placeholder="Vehicle Name"
        value={formData.vehicle}
        onChange={(event) =>
          setFormData({ ...formData, vehicle: event.target.value })
        }
      />
    
    
    </div>
  );
}

export default VehicleDetails;
