import pkg from "pg";
const { Pool } = pkg; // Destructure Pool from the default export of pg

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Marco123",
  port: 5432,
});
