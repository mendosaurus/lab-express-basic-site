// create Express application
const express = require("express");

// We create our own server named app
// Express server handling requests and responses
const app = express();

app.use(express.static("public"));

// fitst route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

// about route
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

// gallery route
app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

// server started
app.listen(3000, () => {
  console.log("Stated server on port 3000");
});
