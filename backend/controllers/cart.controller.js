import express from "express";
import cartmodel from "../models/cart.js";


 const  add = async  (req,res)=>{
    const {name,count,price} = req.body;
    try {
        const newitem = new cartmodel({name,count,price});
        await newitem.save();
        res.status(201).json({message:"Data has been sent successfully"});
    } catch (error) {
        res.status(401).json({message:"Data is sent incorrectly"});
    }
    

};


const count = async (req,res)=>{
    const tot = await cartmodel.countDocuments();
    res.json({count:tot});
}
const fetch = async (req,res)=>{
    try {
        const courses = await cartmodel.find();
        res.status(201).json({courses});
    } catch (error) {
        res.status(400).json({message:"Error in fetching data"});
    }
    
}
export  {add,count,fetch};
