//------------------CREATE THE SERVER---------------------

var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cons = require("consolidate"),
  dust = require("dustjs-helpers"),
  pg = require("pg"),
  app = express();

var connect = "postgres://postgres:123456789@localhost/devhackdb"; //DB connect string

const PORT = 3000;

app.engine("dust", cons.dust);

app.set("view engine", "dust");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  console.log("TEST");
});

app.listen(PORT, function () {
  console.log("Server started on Port 3000");
});

//--------------SETTING UP EXPRESS API TO INTERACT WITH POSTGRESQL----------------

const express = require("express");
const pool = require("./db"); // Import database connection

const app = express();
app.use(express.json()); // Middleware for parsing JSON

// Route to get all users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users"); // SQL query
    res.json(result.rows); // Send result as JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
