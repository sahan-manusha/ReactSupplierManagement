import React from 'react';
import './InsertSupplier.css';
import axios from 'axios';
import { useState } from 'react';
import Swal from 'sweetalert2';

const InsertSupplier = () => {
    const [supplierData, setSupplierData] = useState({
        supplierID: '',
        name: '',
        address: '',
        nic: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierData({ ...supplierData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost:3000/api/suppliers', supplierData)
            .then(() => {
                // Show a SweetAlert success message
                Swal.fire({
                    title: 'Success!',
                    text: 'Supplier Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                // Reset the form fields
                setSupplierData({
                    supplierID: '',
                    name: '',
                    address: '',
                    nic: '',
                });
            })
            .catch((error) => {
                // Show a SweetAlert error message if the request fails
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to add supplier',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                console.error('Error adding supplier:', error);
            });
    };

    return (
        <div>
            <center>
                <h2>Supplier Information Form</h2>
            </center>
            <form id="supplierForm" onSubmit={handleSubmit}>
                {/* Supplier ID Field */}
                <div className="form-group">
                    <label htmlFor="supplierID">Supplier ID:</label>
                    <input
                        type="text"
                        id="supplierID"
                        name="supplierID"
                        className="form-control"
                        required
                        onChange={handleChange}
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

                {/* Submit Button */}
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InsertSupplier;
