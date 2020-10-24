const express = require('express');

const router = express.Router();
//ZTR:RD: creating a post method as a possible structure within your REACT???  I AM STILL UNCLEAR ABOUT HOW TO CONNECT PROPERLY FROM OUR BACK TO FRONT?????   So I am going to try to get us up to mysql and close to sequelize...
router.get('/add-product', (req, res, next) => {
    console.log("ADD PRODUCT PAGE FOR ZACH?TRAVIS?FRANK?");
    res.send(' <form action="/product" method = "POST"><input type ="text" name="title"><button type="submit">ADD PRODUCT</button></input><form>');

})