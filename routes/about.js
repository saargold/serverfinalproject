const express = require("express") ;
const router=express.Router();
const developerDetails=[
    {id:"312593239",firsName:"Saar",lastName:"Goldshtein",email:"Saarphone@gmail.com"},
    {id:"321215428",firsName:"Yulia ",lastName:"Kufman ",email:"Yuliakufman28@gmail.com"}

]


router.get("/",(req,res)=>{
    res.json(developerDetails);
})



module.exports=router;