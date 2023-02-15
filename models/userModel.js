const mongoose = require("mongoose");
const usersModel = new mongoose.Schema({
    user_id:String,
    first_name :String,
    last_name :String,
    birthday:Date

});
const UsersModel = mongoose.model("users",usersModel);

exports.UsersModel=UsersModel;


