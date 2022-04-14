import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";


const CarManagement = () => {
    const [Data,setData] = useState([]);
    const [RowData,SetRowData]=useState([])
    const [ViewShow,SetViewShow]=useState(false)
    const handleViewShow = () =>{SetViewShow(true)}
    const handleViewClose = () =>{SetViewShow(false)}
    //for edit model
    const [ViewEdit,SetEditShow]=useState(false)
    const handleEditShow = () =>{SetEditShow(true)}
    const handleEditClose = () =>{SetEditShow(false)}

    //for delete model
    const [ViewDelete,SetDeleteShow]=useState(false)
    const handleDeleteShow = () =>{SetDeleteShow(true)}
    const handleDeleteClose = () =>{SetDeleteShow(false)}

    //for add new data model
    const [ViewPost,SetPostShow]=useState(false)
    const handlePostShow = () =>{SetPostShow(true)}
    const handlePostClose = () =>{SetPostShow(false)}

    //define here that local form that store the data from data
    const [title,settitle] =useState("")
    const [email,setemail] =useState("")
    const [brand,setbrand] =useState("")
    const [price,setprice] =useState("")
    const [fuel,setfuel] =useState("")
    const [model,setmodel] =useState("")

    const [Delete, setDelete] = useState(false)
    
    //ID for Update record and Delete
    const [id,setId] = useState("");
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

    const handleSubmit = () =>{
        //post car data
        const url = 'http://localhost:8000/Carmanagement'
        const Credentials = {title,email,brand,price,fuel,model}
        axios.post(url, Credentials)
        .then(response=>{
            const result = response.data;
            const {status, message, data}=result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                alert(message)
                window.location.reload()  
            }
        }) 
        .catch(err=>{
            console.log(err)
        })
    }

    const handleEdit = () => {
       //Edit car data
       const url = `http://localhost:8000/Carmanagement/ ${id}`
       const Credentials = {title,email,brand,price,fuel,model}
       axios.put(url, Credentials)
       .then(response=>{
           const result = response.data;
           const {status, message, data}=result;
           if(status !== 'SUCCESS'){
               alert(message,status)
           }
           else{
               alert(message)
               window.location.reload()  
           }
       }) 
       .catch(err=>{
           console.log(err)
       })
    }

    //HAndle delete function
    const handleDelete = () => {
        //delete car data
        const url = `http://localhost:8000/Carmanagement/${id}`
        axios.delete(url)
        .then(response=>{
            const result = response.data;
            const {status, message, data}=result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                alert(message)
                window.location.reload()  
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

        <div className='row'>
                <div className='mt-5 mb-4'>
                <Button variant='primary' style={{marginRight:800}} onClick={()=>{handlePostShow()}}><i className='fa fa-plu'></i> Add New Car</Button> 
                
                
                    </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th style={{fontSize:25}}>Vehicle Title</th>
                                <th style={{fontSize:25}}>Email</th>
                                <th style={{fontSize:25}}>Brand</th>
                                <th style={{fontSize:25}}>Price per Day</th>
                                <th style={{fontSize:25}}>Fuel Type</th>
                                <th style={{fontSize:25}}>Model Year</th>
                                <th style={{fontSize:25}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Data.map((item)=>
                           <tr key={item._id}>
                               <td style={{fontSize:25}}>{item.title}</td>
                               <td style={{fontSize:25}}>{item.email}</td>
                               <td style={{fontSize:25}}>{item.brand}</td>
                               <td style={{fontSize:25}}>{item.price}</td>
                               <td style={{fontSize:25}}>{item.fuel}</td>
                               <td style={{fontSize:25}}>{item.model}</td>
                               <td style={{minWidth:190}}>
                                   <Button size='sm' variant='primary' onClick={() => {handleViewShow(SetRowData(item))}}>View</Button>
                                   <Button size='sm' variant='warning' onClick={() => {handleEditShow(SetRowData(item),setId(item._id))}}>Edit</Button>
                                   <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item), setId(item._id), setDelete(true))}}>Delete</Button>
                               </td>
                           </tr>
                           )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='model-box-view'>
                <Modal
                   show={ViewShow}
                   onHide={handleViewClose}
                   backdrop="static"
                   keyboard={false}
                >
                   <Modal.Header closeButton>
                       <Modal.Title>View Car Data</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <div>
                           <div className='form-group'>
                               <input type="text" className='form-control' value={RowData.title} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="email" className='form-control' value={RowData.email} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.brand} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.price} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.fuel} readOnly/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="text" className='form-control' value={RowData.model} readOnly/>
                           </div>
                           {

                              Delete && (
                                <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Car</Button>
                              )

                           }
                       </div>
                   </Modal.Body>  
                   <Modal.Footer>
                       <Button variant='secondary' onClick={handleViewClose}>Close</Button>
                   </Modal.Footer>  
                </Modal>

            </div>
            {/*model for submit data to database*/}
            <div className='model-box-view'>
                <Modal
                   show={ViewPost}
                   onHide={handlePostClose}
                   backdrop="static"
                   keyboard={false}
                >
                   <Modal.Header closeButton>
                       <Modal.Title>Add a new Car</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <div>
                           <div className='form-group'>
                               <input type="long-text" className='form-control' onChange={(e)=> settitle(e.target.value)} placeholder="Please enter car title"/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="email" className='form-control' onChange={(e)=> setemail(e.target.value)} placeholder="Please enter an email"/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="long-text" className='form-control' onChange={(e)=> setbrand(e.target.value)} placeholder="Please enter car brand"/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="long-text" className='form-control' onChange={(e)=> setprice(e.target.value)} placeholder="Please enter car price"/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="long-text" className='form-control' onChange={(e)=> setfuel(e.target.value)} placeholder="Please enter fuel type"/>
                           </div>
                           <div className='form-group mt-3'>
                               <input type="long-text" className='form-control' onChange={(e)=> setmodel(e.target.value)} placeholder="Please enter car model"/>
                           </div>
                           <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmit}>Add Car</Button>
                       </div>
                   </Modal.Body>  
                   <Modal.Footer>
                       <Button variant='secondary' onClick={handlePostClose}>Close</Button>
                   </Modal.Footer>  
                </Modal>

            </div>
            {/*Model for edit car record*/}
            <div className='model-box-view'>
                <Modal
                   show={ViewEdit}
                   onHide={handleEditClose}
                   backdrop="static"
                   keyboard={false}
                >
                   <Modal.Header closeButton>
                       <Modal.Title>Edit Car</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <div>
                           <div className='form-group'>
                               <label>Title</label>
                               <input type="long-text" className='form-control' onChange={(e)=> settitle(e.target.value)} placeholder="Please enter car title" defaultValue={RowData.title}/>
                           </div>
                           <div className='form-group mt-3'>
                           <label>Email</label>
                               <input type="email" className='form-control' onChange={(e)=> setemail(e.target.value)} placeholder="Please enter an email" defaultValue={RowData.email}/>
                           </div>
                           <div className='form-group mt-3'>
                           <label>Brand</label>
                               <input type="long-text" className='form-control' onChange={(e)=> setbrand(e.target.value)} placeholder="Please enter car brand" defaultValue={RowData.brand}/>
                           </div>
                           <div className='form-group mt-3'>
                           <label>Price</label>
                               <input type="long-text" className='form-control' onChange={(e)=> setprice(e.target.value)} placeholder="Please enter car price" defaultValue={RowData.price}/>
                           </div>
                           <div className='form-group mt-3'>
                           <label>Fuel</label>
                               <input type="long-text" className='form-control' onChange={(e)=> setfuel(e.target.value)} placeholder="Please enter fuel type" defaultValue={RowData.fuel}/>
                           </div>
                           <div className='form-group mt-3'>
                           <label>Model</label>
                               <input type="long-text" className='form-control' onChange={(e)=> setmodel(e.target.value)} placeholder="Please enter car model" defaultValue={RowData.model}/>
                           </div>
                           <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Car</Button>
                       </div>
                   </Modal.Body>  
                   <Modal.Footer>
                       <Button variant='secondary' onClick={handleEditClose}>Close</Button>
                   </Modal.Footer>  
                </Modal>

            </div>
        </div>



  


};

export default CarManagement;