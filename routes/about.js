//Saar Goldshtein & Yulia Kufman

const express = require("express") ;
const router=express.Router();
const developerDetails=[
    {firsName:"Saar",lastName:"Goldshtein",id:"312593239",email:"Saarphone@gmail.com"},
    {firsName:"Yulia ",lastName:"Kufman",id:"321215428",email:"Yuliakufman28@gmail.com"}
]

router.get("/",(req,res)=>{
    res.json(developerDetails);
})


module.exports=router;