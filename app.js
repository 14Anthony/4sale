const http = require('http');
const express = require('express');

// const routes = require('./routes');
const app = express();
//------------------------------------------------------------------------------------
app.use('/', (req, res, next) => {
    console.log("LANDING PAGE for ZACH?TRAVIS?FRANK?");
    // RD: making sure that the request continues to the next middleware in line
    next();
})
//-------------------------------------------------------------------------------------
app.use('/add-product', (req, res, next) => {
    console.log("ADD PRODUCT PAGE FOR ZACH?TRAVIS?FRANK?")
    res.send("<h3>HELLO REACT REPLACEMENTS CHECK CONSOLE NOW</h3>")
})
//-------------------------------------------------------------------------------------



// console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);
