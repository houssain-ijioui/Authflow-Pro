import { config } from "dotenv";
config();
import express from "express";

const app = express();



const PORT = process.env.PORT;
app.listen(PORT || 8080, console.log("Listening in 8000"));