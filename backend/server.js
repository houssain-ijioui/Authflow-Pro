import { config } from "dotenv";
config();
import express from "express";

import DatabaseConnection from "./config/db.js";
import routeNotFound from "./middlewares/routeNotFound.js";

const app = express();

// connect DB
const db = new DatabaseConnection(process.env.mongoUri, process.env.dbName);
db.connect();


// middlewares
app.use(express.json());


// not found routes
app.use(routeNotFound)


const PORT = process.env.PORT;
app.listen(PORT || 8080, console.log("Listening in 8000"));