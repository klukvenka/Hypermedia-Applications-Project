/** 
Author: Sairaghav Venkataraman
Description:
Defines routes to access Member-related data using Axios
*/
module.exports = app => {
    const members = require("../controllers/members.controller.js");
    var router = require("express").Router();
    
    router.post("/", members.create);
    router.post("/initdb", members.initdata);
    router.get("/all", members.findAll);
    router.get("/name", members.findByName);
    router.get("/area", members.findByArea);


    app.use('/members', router);
};