const express = require('express');
const router = express.Router();
const CountryController = require("../controllers/countryController");

router.route("/country")
    .get(CountryController.findAll)
    .post(CountryController.save)

router.route("/country/:id")
    .get(CountryController.findById)
    .put(CountryController.update)
    .delete(CountryController.remove)

module.exports = router;
