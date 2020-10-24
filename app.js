const http = require('http');
const express = require('express');

// const routes = require('./routes');
const app = express();
//-----------------------ALWAYS RUNS--------------------------------------------
app.use('/', (req, res, next) => {
    console.log("LANDING PAGE for ZACH?TRAVIS?FRANK?");
    // RD: making sure that the request continues to the next middleware in line
    next();
});
//-----------------------ADD PRODUCT ROUTE -------------------------------------
app.use('/add-product', (req, res, next) => {
    console.log("ADD PRODUCT PAGE FOR ZACH?TRAVIS?FRANK?");
    res.send(' <form action="/product" method = "POST"><input type ="text" name="title"><button type="submit">ADD PRODUCT</button></input><form>');
});

//-------------------------PRODUCT ROUTE-----------------------------------------
app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});
app.use("/...", (req, res, next) => {
    console.log("ANOTHER PAGE FOR ZACH?TRAVIS?FRANK?");
    res.send('<h3>ANOTHER REACT TEMPLATE FOR FRANK,TRAVIS,ZACHARIAH');
});


// console.log(routes.someText);

// const server = http.createServer(routes.handler);

server.listen(3000);
