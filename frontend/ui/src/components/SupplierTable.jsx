import React from 'react'
import "./SupplierTable.css";

const SupplierTable = ({supplier}) => {
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
            onClick={() => handleUpdate(supplier.supplierID)}
          >
            Update
          </button>
          <button
            style={{ backgroundColor: 'red' }}
            className="btn btn-danger"
            onClick={() => handleDelete(supplier.supplierID)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>

</div>

  )
}

export default SupplierTable