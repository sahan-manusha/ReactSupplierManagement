// // import React from 'react'
// // import "./SupplierTable.css";

// // const SupplierTable = ({supplier}) => {
// //   return (
// //     <div>
// //        <div className="table-container">
// //   <table className="table small-table">
// //     <thead>
// //       <tr>
// //         <th scope="col">Supplier ID</th>
// //         <th scope="col">Supplier Name</th>
// //         <th scope="col">Action</th>
       
// //       </tr>
// //     </thead>
// //     <tbody>
// //       <tr>
// //         <th scope="row">{supplier.supplierID}</th>
// //         <td>{supplier.name}</td>
// //         {/* Action column with Update and Delete buttons */}
// //         <td>
// //           <button
// //             style={{ backgroundColor: 'lightgreen' }}
// //             className="btn btn-warning me-2"
// //             onClick={() => handleUpdate(supplier.supplierID)}
// //           >
// //             Update
// //           </button>
// //           <button
// //             style={{ backgroundColor: 'red' }}
// //             className="btn btn-danger"
// //             onClick={() => handleDelete(supplier.supplierID)}
// //           >
// //             Delete
// //           </button>
// //         </td>
// //       </tr>
// //     </tbody>
// //   </table>
// // </div>

// // </div>

// //   )
// // }

// // export default SupplierTable

// import React from 'react';
// import './SupplierTable.css';

// const SupplierTable = ({ supplier, handleDelete, handleUpdate }) => {
//     const handleDeleteConfirmation = (supplierID) => {
//         // Confirm with the user before deleting the supplier
//         const isConfirmed = window.confirm('Are you sure you want to delete this supplier?');
//         if (isConfirmed) {
//             // Call the handleDelete function from props
//             handleDelete(supplierID);
//         }
//     };

//     return (
//         <div>
//             <div className="table-container">
//                 <table className="table small-table">
//                     <thead>
//                         <tr>
//                             <th scope="col">Supplier ID</th>
//                             <th scope="col">Supplier Name</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th scope="row">{supplier.supplierID}</th>
//                             <td>{supplier.name}</td>
//                             {/* Action column with Update and Delete buttons */}
//                             <td>
//                                 <button
//                                     style={{ backgroundColor: 'lightgreen' }}
//                                     className="btn btn-warning me-2"
//                                     onClick={() => handleUpdate(supplier.supplierID)}
//                                 >
//                                     Update
//                                 </button>
//                                 <button
//                                     style={{ backgroundColor: 'red' }}
//                                     className="btn btn-danger"
//                                     onClick={() => handleDeleteConfirmation(supplier.supplierID)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default SupplierTable;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import './SupplierTable.css';

const SupplierTable = ({ supplier, handleDelete }) => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleDeleteConfirmation = (supplierID) => {
        // Confirm with the user before deleting the supplier
        const isConfirmed = window.confirm('Are you sure you want to delete this supplier?');
        if (isConfirmed) {
            // Call the handleDelete function from props
            handleDelete(supplierID);
        }
    };

    const handleUpdateClick = (supplierID) => {
        // Redirect to the index supplier page when the update button is clicked
        navigate("/insert");
    };

    return (
        <div>
            <div className="table-container">
                <table className="table small-table">
                    <thead>
                        <tr>
                            <th scope="col">Supplier ID</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{supplier.supplierID}</th>
                            <td>{supplier.name}</td>
                            {/* Action column with Update and Delete buttons */}
                            <td>
                                <button
                                    style={{ backgroundColor: 'lightgreen' }}
                                    className="btn btn-warning me-2"
                                    onClick={() => handleUpdateClick(supplier.supplierID)}
                                >
                                    Update
                                </button>
                                <button
                                    style={{ backgroundColor: 'red' }}
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteConfirmation(supplier.supplierID)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SupplierTable;
