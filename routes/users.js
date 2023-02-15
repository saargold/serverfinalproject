var express = require('express');
var router = express.Router();

const { UsersModel} =require("../models/userModel")

/* GET home page. */
router.get('/',  async  function(req, res, next) {
  let data = await UsersModel.find({});
console.log(data +"data");
  res.json(data)
});

module.exports = router;
