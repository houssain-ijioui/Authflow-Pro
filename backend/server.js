import { config } from "dotenv";
config();
import express from "express";

import DatabaseConnection from "./config/db.js";

const app = express();

// connect DB
const db = new DatabaseConnection(process.env.mongoUri, process.env.dbName);
db.connect();




const PORT = process.env.PORT;
app.listen(PORT || 8080, console.log("Listening in 8000"));