module.exports = app => {
    const areas = require("../controllers/areas.controller.js");
    var router = require("express").Router();
    
    router.post("/", areas.create);
    router.post("/initdb", areas.initdata);
    router.get("/all", areas.findAll);
    router.get("/name", areas.findByName);


    app.use('/areas', router);
};