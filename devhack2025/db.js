const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost", // Change this if your DB is remote
  database: "postgres",
  password: "Marco123",
  port: 5432,
});

module.exports = pool;
