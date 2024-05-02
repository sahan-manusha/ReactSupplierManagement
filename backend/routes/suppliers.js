const express = require('express');

const router = express.Router();

const Suppliers = require("../models/supplier");

//test
router.get("/test",(req, res) => res.send("Supplire routes working"));

router.post("/",(req,res)=>{
    Suppliers.create(req.body)
    .then(()=>res.json({msg:"Supplier added successfully"}))
    .catch(()=>res.status(400).json({msg:"Supplier adding failed"}));
});



router.get("/",(req,res)=>{
    Suppliers.find()
    .then((suppliers)=>res.json(suppliers))
    .catch(()=>res.status(400).json({msg:"No Supplier Found"}));
});



router.get("/:id",(req,res)=>{
    Suppliers.findById(req.params.id)
    .then((supplier)=>res.json(supplier))
    .catch(()=>res.status(400).json({msg:"No Supplier Found"}));
});



router.put("/:id",(req,res)=>{
    Suppliers.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>res.json({msg:"Supplier updated successfully"}))
    .catch(()=>res.status(400).json({msg:"Supplier updating failed"}));
});

router.delete("/:id",(req,res)=>{
    Suppliers.findByIdAndDelete(req.params.id)
    .then(()=>res.json({msg:"Supplier deleted successfully"}))
    .catch(()=>res.status(400).json({msg:"Supplier deleting failed"}));
})
module.exports = router;