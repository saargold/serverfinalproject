const express = require("express") ;
const {CostsModel,validCost} =require("../models/costsModel")
const {UsersModel} =require("../models/userModel")

const router=express.Router();

router.get("/",async(req,res)=>{
    let data = await CostsModel.find({});
    res.json(data)
})
router.post("/",async(req,res)=>{

   // check validation
    let validBody =validCost(req.body);
    if(validBody.error){
        return res.status(400).json(validBody.error.details)
    }
    let cost = new CostsModel(req.body);
    let checkId = req.body.user_id;
    const user = await UsersModel.findOne({ user_id: checkId}).select("user_id");
    if (user){
        await cost.save();
        res.json(req.body);
    }
    else{
        res.json({msg:"UserId Not Found"});
    }


})




module.exports=router;