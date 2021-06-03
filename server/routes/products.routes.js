module.exports = app => {
    const products = require("../controllers/products.controller.js");
    var router = require("express").Router();
    
    router.post("/", products.create);
    router.post("/initdb", products.initdata);
    router.get("/all", products.findAll);
    router.get("/name", products.findByName);
    router.get("/area", products.findByArea);
    router.get("/manager", products.findByManager);
    router.get("/reference", products.findByReference);


    app.use('/products', router);
};