import React from 'react';
import "./InsertSupplier.css";
import axios from 'axios';
import { useState } from 'react';

const InsertSupplier = () => {


    const[supplierData,setSupplierData] = useState({
        supplierID:"",
        name:"",
        address:"",
        nic:"",
    });

    const handleChange = (e) => {
        const {name,value} = e.target;
        setSupplierData({...supplierData,[name]:value});
        console.log(supplierData);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3000/api/suppliers",supplierData)
       .then(()=>{
        alert("Supplier Added Successfully");
        setSupplierData({
            supplierID:"",
            name:"",
            address:"",
            nic:"",
        });
 
       })
    }


  return (
    <div>
        <center><h2>Supplier Information Form</h2></center>
        <form id="supplierForm" onSubmit={handleSubmit}>
  {/* <!-- Supplier ID Field --> */}
  <div class="form-group">
    <label for="supplierID">Supplier ID:</label>
    <input type="text" id="supplierID" name="supplierID" class="form-control" required onChange={handleChange} value={supplierData.supplierID} />
  </div>

  {/* <!-- Name Field --> */}
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" class="form-control" required  onChange={handleChange} value={supplierData.name}/>
  </div>

  {/* <!-- Address Field --> */}
  <div class="form-group">
    <label for="address">Address:</label>
    <textarea id="address" name="address" class="form-control" required onChange={handleChange} value={supplierData.address}></textarea>
  </div>

  {/* <!-- NIC Field --> */}
  <div class="form-group">
    <label for="nic">NIC:</label>
    <input type="text" id="nic" name="nic" class="form-control" required onChange={handleChange} value={supplierData.nic}/>
  </div>

  {/* <!-- Submit Button --> */}
  <div class="form-group">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>

    </div>
  )
}

export default InsertSupplier