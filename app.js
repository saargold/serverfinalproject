const express = require('express');
const http = require("http");
const path = require('path');
require("./db/mongoConnect");



const {routesInit} = require("./routes/config_route");

const app = express();


app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

routesInit(app);
const server = http.createServer(app);
let port = process.env.PORT ||"3000";

server.listen(port);