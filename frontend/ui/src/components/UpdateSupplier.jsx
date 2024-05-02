import React, { useState, useEffect } from 'react';
import "./InsertSupplier.css";
import axios from 'axios';

const UpdateSupplier = ({ supplier, onUpdateSuccess }) => {
    // Initialize form data state with the existing supplier data
    const [supplierData, setSupplierData] = useState({
        supplierID: supplier.supplierID || "",
        name: supplier.name || "",
        address: supplier.address || "",
        nic: supplier.nic || "",
    });

    // Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplierData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission for updating supplier
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Update the supplier using a PUT request
            await axios.put(`http://localhost:3000/api/suppliers/${supplierData.supplierID}`, supplierData);

            // Alert success message
            alert("Supplier Updated Successfully");

            // Call onUpdateSuccess prop function (if provided) to notify parent component of success
            if (onUpdateSuccess) {
                onUpdateSuccess();
            }
        } catch (error) {
            console.error("Error updating supplier:", error);
            alert("An error occurred while updating the supplier.");
        }
    };

    return (
        <div>
            <center><h2>Update Supplier Information</h2></center>
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
                        disabled
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
                    <button type="submit" className="btn btn-primary" href="/update">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateSupplier;
