import React, { useState } from 'react';
import MaterialTable from 'material-table';

const CancelledBookings = () => {
    const[data,setData]=useState([
        {brand:"toyota",vehicle:"corolla",user:"mala",contact:"1236852369"}
    ])
    const columns=[
        {title:"Vehicle Brand",field:"brand"},
        {title:"Vehicle Name",field:"vehicle"},
        {title:"Customer Name",field:"user"},
        {title:"Contact No",field:"contact"},
        {title:"Handover Date",field:"handoverDate"},
        {title:"Return Date",field:"returnDate"}
    ]

return <div className="title"> 
      
{/* for delete navigation bar */}
       <style type="text/css" >
    { `.navlink {display:none}` }
</style>
<style type="text/css" >
    { `.navbar {display:none}` }
</style>
<style type="text/css" >
    { `.navbar1 {display:none}` }
</style>


<div className="newbookings">
<h1 align="center">React-App</h1>
      <h4 align='center'>Material Table</h4>

    <MaterialTable columns={columns} data={data} />
    </div>
</div>;
  };
  
  export default CancelledBookings;
  