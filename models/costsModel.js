const mongoose = require("mongoose");
// for validation
const Joi = require("joi")
const costsModel = new mongoose.Schema({
    user_id:String,
    year:String,
    month:String,
    day:String,
    id:String,
    description:String,
    category:String,
    sum: Number

});
const CostsModel = mongoose.model("costs",costsModel);

exports.CostsModel=CostsModel;

exports.validCost =(_reqBody)=>{
    let joiSchema = Joi.object({

        user_id:Joi.string().required(),
        id:Joi.string().required(),
        year:Joi.number().min(1930).max(currentYear).required(),
        month:Joi.number().min(1).max(12).required(),
        day:Joi.number().min(1).max(31).required(),
        description:Joi.string().min(1).required(),
        sum:Joi.number().min(1).required(),
        category:Joi.string().required().valid("food","health","housing","sport","education","transportation","other"),
    })

    return joiSchema.validate(_reqBody);
}

//exports.CostsModel=CostsModel;