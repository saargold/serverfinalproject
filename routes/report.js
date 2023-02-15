const express = require("express") ;
const {CostsModel} =require("../models/costsModel")

const router=express.Router();
let arr = ["food","health","housing","sport","education","transportation","other"];


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

// router.get("/",async(req,res)=>{
//     let user_id = req.query.user_id;
//     let year = req.query.year;
//     let month = req.query.month;
//     let categoryQ = req.query.category;
//     console.log(user_id,year);
//      const costReport = await CostsModel.find({ user_id: user_id}).find({year:year}).select("category").select("sum").select("description").select("user_id");
//     //res.json(costReport);
//      res.send(costReport);

// })
router.get("/",async(req,res)=>{
    let user_id = req.query.user_id;
    let year = req.query.year;
    let month = req.query.month;
    let categoryQ = req.query.category;
    if(month == null){
        console.log("here");
        
        const costReport = await CostsModel.find({ user_id: user_id}).find({year:year}).select("category").select("sum").select("description").select("user_id");
        res.json(costReport);

    }
    else{
        const costReport = await CostsModel.find({ user_id: user_id}).find({year:year}).find({month:month}).select("category").select("sum").select("description").select("user_id");
        res.json(costReport);


    }
    
})



module.exports=router;