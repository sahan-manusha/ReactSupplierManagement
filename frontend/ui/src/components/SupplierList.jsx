import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import SupplierTable from './SupplierTable'
import "./SupplierList.css";

const SupplierList = () => {

    const [suppliers, setSuppliers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3000/api/suppliers")
       .then(response => {
            setSuppliers(response.data);
        })
       .catch(error => {
            console.log(error);
        })
    }, []);

    const supplierList = suppliers.length === 0 ? "no supplier available" : suppliers.map((supplier,index) =><SupplierTable key={index} supplier={supplier}/>);




  return (
    
    <div className='show_SupplierList'>
        <div className="container">
            <div className="list">{supplierList}</div>
        </div>
       
    </div>
  )
}

export default SupplierList