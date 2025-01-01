import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const dbcon = mysql.createConnection({
  database: process.env.database,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
});

export default dbcon;
