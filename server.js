const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/index");
const path = require("path")
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/api',apiRoutes);

app.get("*", (req, res)=> {
  res.sendFile(path.join(__dirname,"./client/public/index.html"))
})
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/findyourplace", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});