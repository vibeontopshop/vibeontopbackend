const config = require("../config/auth.config");
const db = require("../models/index.model");
const User = db.user;
const mongoose = require('mongoose');

exports.Addaddress = async(req , res) => {
    try{
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const { name, phone, streetAddress, Landmark, city, pincode, state } = req.body;
        const newAddress = {
            name,
            phone,
            streetAddress,
            Landmark,
            city,
            pincode,
            state
        };
        user.addresses.push(newAddress);
        await user.save();
        res.status(200).json({message:"addressadded successfully!"});
    }catch(error){
        res.status(500).json({message:"Error adding address",error:error.message})
    }
};

exports.Getaddress = async(req,res) =>{
    try{
        const user = await User.findById(req.userId);
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({addresses:user.addresses});
    }catch(error){
        res.status(500).json({message:"error retriving addresses",error:error.message})
    }
};
  
  
  
  