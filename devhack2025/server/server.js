import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cons from "consolidate";
import dust from "dustjs-helpers";
import { pool } from "../db.js";
import { generateMessage } from "./openai/Suggestion.js";

// Getting __dirname equivalent in ES modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.engine("dust", cons.dust);
app.set("view engine", "dust");
app.set("views", path.join(__dirname, "views")); // Using path.join to get the correct path

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

app.post(`/${TABLE_NAME}`, async (req, res) => {
  try {
    const { brand, model, year, color } = req.body;
    const result = await pool.query(
      `INSERT INTO ${TABLE_NAME} (brand, model, year, color) VALUES ($1, $2, $3, $4) RETURNING *`,
      [brand, model, year, color]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error("Database Insert Error:", err);
    res.status(500).send("Server Error");
  }
});

app.put(`/${TABLE_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { brand, model, year, color } = req.body;

    const result = await pool.query(
      `UPDATE ${TABLE_NAME} SET brand = $1, model = $2, year = $3, color = $4 WHERE id = $5 RETURNING *`,
      [brand, model, year, color, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).send("Car not found");
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Database Update Error:", err);
    res.status(500).send("Server Error");
  }
});

app.delete(`/${TABLE_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(`DELETE FROM ${TABLE_NAME} WHERE id = $1`, [
      id,
    ]);

    if (result.rowCount === 0) {
      return res.status(404).send("Car not found");
    }

    res.json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error("Database Delete Error:", err);
    res.status(500).send("Server Error");
  }
});

// Suggestion endpoints
app.get(`/suggestion/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, contact, education, experience } = req.body;

    // Retrieve infor
    const result = generateMessage("linkedin", req.body, "Marco");

    res.json(result);
  } catch (err) {
    console.error("Suggestion error", err);
    res.status(500).send("Server Error");
  }
});
