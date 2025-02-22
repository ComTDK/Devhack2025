var express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cons = require("consolidate"),
  dust = require("dustjs-helpers"),
  pool = require("../db"),
  app = express();

app.engine("dust", cons.dust);
app.set("view engine", "dust");
app.set("views", __dirname + "/views");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  console.log("TEST");
});

app.get("/test-db", async function (req, res) {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, time: result.rows[0].now });
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`Server started on Port ${PORT}`);
});

const TABLE_NAME = "connection";

app.get(`/${TABLE_NAME}`, async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM ${TABLE_NAME}`);
    res.json(result.rows);
  } catch (err) {
    console.error("Database Query Error:", err);
    res.status(500).send("Server Error");
  }
});

//this const of req.body only works for connections table
/**
 * APP.POST is an API end point for the server to communicate with the database to tell it to INSERT to a table. We use the function 'post' with that
 * it takes request and response. Request contains what the front end gives to us (should contain the same fields of table)
 */
app.post(`/${TABLE_NAME}`, async (req, res) => {
  try {
    const { name, email, education, experience, linkedIn, fun_fact, event } =
      req.body;
    const result = await pool.query(
      `INSERT INTO ${TABLE_NAME} (name, email, education, experience, linkedIn, fun_fact, event) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [name, email, education, experience, linkedIn, fun_fact, event]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Database Insert Error:", err);
    res.status(500).send("Server Error");
  }
});

//same thing here, but PUT = UPDATE
/**
 * We have a separate id constant to take from req.params because remember in your database creation, you have a constant that says SERIAL PRIMARY KEY. It will inc+ the id each time a table is created
 *    Take that one from req.params and body would be the rest (Why?)
 */
app.put(`/${TABLE_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, education, experience, linkedIn, fun_fact, event } =
      req.body;

    const result = await pool.query(
      `UPDATE ${TABLE_NAME} SET name = $1, email = $2, education = $3, experience = $4, linkedIn = $5, fun_fact = $6, event = $7 WHERE id = $8 RETURNING *`,
      [name, email, education, experience, linkedIn, fun_fact, event, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Connection not found");
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Database Update Error:", err);
    res.status(500).send("Server Error");
  }
});

//again, only for connection table (just change names), but PK used is still id so to delete, we just req the specific id
app.delete(`/${TABLE_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1`, [
      id,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).send("Connection not found");
    }

    res.json({ message: "Connection deleted successfully" });
  } catch (err) {
    console.error("Database Delete Error:", err);
    res.status(500).send("Server Error");
  }
});
