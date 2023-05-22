const express = require('express');
const { PurchaseModel } = require('../model/purchase.model');
const PurchaseRouter = express.Router()

PurchaseRouter.get("/",async(req,res)=>{
    let Userid = req.body.Userid
    try {
        let data = await PurchaseModel.find({Userid})
        res.send(data)
    } catch (error) {
        console.log(error.message);
        res.status(400).send({"err":"something went wrong"})
    }
});


module.exports = {
    PurchaseRouter
}