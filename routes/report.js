const express = require("express") ;
const {CostsModel} =require("../models/costsModel")

const router=express.Router();


router.get("/:user_id/:year",async(req,res)=>{
    let idQ = req.params.user_id;
    let yearQ = req.params.year;
    const costReport = await CostsModel.find({ user_id: idQ}).find({year:yearQ}).select("category").select("sum").select("description").select("user_id");
    res.json(costReport);

})
router.get("/:user_id/:year/:month",async(req,res)=>{
    let idQ = req.params.user_id;
    let yearQ = req.params.year;
    let monthQ = req.params.month;
    let categoryQ = req.params.category;

    const costReport = await CostsModel.find({ user_id: idQ}).find({year:yearQ}).find({month:monthQ}).select("category").select("sum").select("description").select("user_id");
    res.json(costReport);
    // res.send(costReport);

})


module.exports=router;