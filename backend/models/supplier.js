const mongoose = require('mongoose');

const SupplierSchema = new mongoose.Schema({


    supplierID: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    nic: {
        type: String,
        required: true
    },
    
});

module.exports = Supplier = mongoose.model('Supplier', SupplierSchema);

