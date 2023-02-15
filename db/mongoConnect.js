const mongoose = require("mongoose");

main().catch(err=>console.log(err));

async function main(){
    const  mongoAtlasUri =
        "mongodb+srv://admin:Sg366320444@hitcluster.znyzzgh.mongodb.net/?retryWrites=true&w=majority";
    // כדי להמנע משגיאה בקונסול
    mongoose.set('strictQuery',false);
    await mongoose.connect(mongoAtlasUri);

    // await mongoose.connect('mongodb://127.0.0.1:27017/express0');
    console.log("mongo connect to express 0 local");

};
//module.exports=db;