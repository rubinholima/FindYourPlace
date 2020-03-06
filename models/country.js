const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {type: String, required: true},
  message: String

});

const Country = mongoose.model("country", countrySchema);

module.exports = Country;
