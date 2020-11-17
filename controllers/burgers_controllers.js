var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")


router.post("/burgers/add", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

// "/api/put&id=1"
router.get("/api/put", function (req, res) {
    burger.update(req.query.id, function (result) {
        console.log(result);
        res.redirect("/")
    });
});

router.get("*", function (req, res) {
    burger.all(function (burgerData) {
        console.log(burgerData)
        console.log("here")
        res.render("index", { burger_data: burgerData });
    });
});


module.exports = router


