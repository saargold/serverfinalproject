const express = require("express") ;
const router=express.Router();
const developerDetails=[
    {id:"312593239",firsName:"Saar",lastName:"Goldshtein",email:"Saarphone@gmail.com"},
    {id:"123123123",firsName:"Yulia",lastName:"Lastname",email:"yuliayesy@gmail.com"}

]


router.get("/",(req,res)=>{
    res.json(developerDetails);
})



module.exports=router;