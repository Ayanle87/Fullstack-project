import cors from "cors";
import express from "express";
const dotenv = require("dotenv"),
    { Client } = require("pg");

const app = express();

dotenv.config();
app.use(cors());

app.get("/", (request, response) => {
    console.log("hej");
    response.send("Hello World!!!??");
});

app.listen(8080, () => {
    console.log("Webbtjänsten kan nu ta emot anrop.");
});
