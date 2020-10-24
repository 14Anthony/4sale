const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//--------------ROUTING GREENED OUT PRIOR VERSION FOR A ROUTES FOLDER WITH ADMIN HOPEFULLY COMPONENT LIKE SCOPE FOR TRAVIS FRANK AND ZACHARIAH..
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extend: false }));

app.use(adminRoutes);
app.use(shopRoutes);



app.listen(3000)


//NOW CREATE ADMIN.js, for "use." funtionalities





//-----------------------------------------------------------------Router change up taking the routes to the individual JS files in ROUTES FOLDER....>routes.js file is still just a hanging artifact.......I don't know if i want that code still.


// // const routes = require('./routes');
// const app = express();
// //-----------------------ALWAYS RUNS--------------------------------------------
// app.use('/', (req, res, next) => {
//     console.log("LANDING PAGE for ZACH?TRAVIS?FRANK?");
//     // RD: making sure that the request continues to the next middleware in line
//     next();
// });
// //-----------------------ADD PRODUCT ROUTE -------------------------------------
// app.use('/add-product', (req, res, next) => {
//     console.log("ADD PRODUCT PAGE FOR ZACH?TRAVIS?FRANK?");
//     res.send(' <form action="/product" method = "POST"><input type ="text" name="title"><button type="submit">ADD PRODUCT</button></input><form>');
// });

// //-------------------------PRODUCT ROUTE-----------------------------------------
// app.use("/product", (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/')
// });
// app.use("/...", (req, res, next) => {
//     console.log("ANOTHER PAGE FOR ZACH?TRAVIS?FRANK?");
//     res.send('<h3>ANOTHER REACT TEMPLATE FOR FRANK,TRAVIS,ZACHARIAH');
// });


// // console.log(routes.someText);

// // const server = http.createServer(routes.handler);

// server.listen(3000);
