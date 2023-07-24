const express = require('express');
const Hotel = require('../models/Hotel');
// Correct import in ./routes/hotels.js



exports.createHotel = async(req,res) => {
   try{
    let hotel = new Hotel(req.body);
    let save = await hotel.save();
    if(!save) { return res.status(404).json("Unable to save hotel. Please try again");}
    return res.status(200).json("Hotel Successfully Added");

   } catch (error) { console.log(error);return res.status(500).json(error);}
}

exports.updateHotel = async(req,res) => {
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body});
        if(!updatedHotel){ return res.status(404).json("Unable to update hotel");}
        return res.status(200).json("Hotel successfully updated");

    }catch(error) { return res.status(500).json("Internal Server Error");}
}

exports.getallHotel = async (req,res,next) => {
    try{
        const hotels = await Hotel.find();
        if(!hotels){ return res.status(404).json("Unable to get all the hotels");}
        next();
        return res.status(200).json(hotels);

    } catch(e) { return res.statu(500).json("Internal Server Error")}
}

exports.deleteHotel = async (req, res) => {
    try {
        const del = await Hotel.findByIdAndDelete(req.params.id);
        if (!del) { return res.status(404).json("Unable to delete"); }
        return res.status(200).json("hotel successfully deleted");
    } catch (error) {
        return res.status(500).json("Internal Server Error");
    }
}


