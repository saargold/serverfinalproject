const indexR = require("./index");
const usersR = require("./users");
const costsR = require("./costs");
const aboutR = require("./about");
const reportR = require("./report");

exports.routesInit =(app) =>{
    app.use("/",indexR);
    app.use("/addcost",costsR);

    app.use("/users",usersR);
    app.use("/about",aboutR);
    app.use("/report",reportR);




}