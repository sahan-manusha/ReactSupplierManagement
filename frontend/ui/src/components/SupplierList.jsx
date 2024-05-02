import React  from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import SupplierCard from './SupplierCard';


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

    const supplierList = 
    supplier.length === 0 ? "No supplier available"
    : suppliers.map((supplier,index)=>{

    })


  return (
    <div>
       <SupplierCard/>
    </div>
  )
}

export default SupplierList