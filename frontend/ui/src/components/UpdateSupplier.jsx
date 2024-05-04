import React, { useState, useEffect } from 'react';
import './UpdateSupplier.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateSupplier = ({ supplier, onUpdate }) => {
    const [supplierData, setSupplierData] = useState({
        supplierID: '',
        name: '',
        address: '',
        nic: '',
    });

    // Initialize form fields with existing supplier data
    useEffect(() => {
        setSupplierData({
            supplierID: supplier.supplierID,
            name: supplier.name,
            address: supplier.address,
            nic: supplier.nic,
        });
    }, [supplier]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierData({ ...supplierData, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:3000/api/suppliers/${supplierData.supplierID}`, supplierData)
            .then(() => {
                // Show a SweetAlert success message
                Swal.fire({
                    title: 'Success!',
                    text: 'Supplier Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                // Notify the parent component to update the data in the table
                onUpdate(supplierData);

                // Optional: Reset the form fields after updating
                // setSupplierData({
                //     supplierID: '',
                //     name: '',
                //     address: '',
                //     nic: '',
                // });
            })
            .catch((error) => {
                // Show a SweetAlert error message if the request fails
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to update supplier',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error updating supplier:', error);
            });
    };

    return (
        <div>
            <center>
                <h2>Update Supplier Information</h2>
            </center>
            <form id="supplierForm" onSubmit={handleUpdate}>
                {/* Supplier ID Field */}
                <div className="form-group">
                    <label htmlFor="supplierID">Supplier ID:</label>
                    <input
                        type="text"
                        id="supplierID"
                        name="supplierID"
                        className="form-control"
                        readOnly
                        value={supplierData.supplierID}
                    />
                </div>

                {/* Name Field */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        required
                        onChange={handleChange}
                        value={supplierData.name}
                    />
                </div>

                {/* Address Field */}
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <textarea
                        id="address"
                        name="address"
                        className="form-control"
                        required
                        onChange={handleChange}
                        value={supplierData.address}
                    ></textarea>
                </div>

                {/* NIC Field */}
                <div className="form-group">
                    <label htmlFor="nic">NIC:</label>
                    <input
                        type="text"
                        id="nic"
                        name="nic"
                        className="form-control"
                        required
                        onChange={handleChange}
                        value={supplierData.nic}
                    />
                </div>

                {/* Update Button */}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSupplier;
