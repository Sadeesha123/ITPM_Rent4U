/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const CarManagement = () => {
    const [Data,setData] = useState([]);
    const GetCarData = () =>{
        //get car data
        const url = 'http://localhost:8000/Carmanagement'
        axios.get(url)
        .then(response=>{
            const result = response.data;
            const {status, message, data}=result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                setData(data)
                console.log(data)
            }
        }) 
        .catch(err=>{
            console.log(err)
        }) 
    }
    //call this function use in uneffect

    useEffect(()=>{
        GetCarData();
    },[])


    return(
        <div>
            <style type="text/css" >
        { `.navbar {display:none}` }
    </style>
    <style type="text/css" >
        { `.navbar1 {display:none}` }
    </style>
            <div className='row'>
                <div className='mt-5 mb-4'>
                <Button variant='primary'><i className='fa fa-plu'></i>
                Add New Employee
                </Button> 
                    </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Vehicle Title</th>
                                <th>Email</th>
                                <th>Brand</th>
                                <th>Price per Day</th>
                                <th>Fuel Type</th>
                                <th>Model Year</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    );
};

export default CarManagement;*/