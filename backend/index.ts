import cors from "cors";
import express from "express";
const dotenv = require("dotenv"),
    { Client } = require("pg");

dotenv.config();

const client = new Client({
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
});

client.connect();

console.log("Lösen:", process.env.DB_PASSWORD);

const app = express();
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Headers", "Content-Type");

    next();
});

app.get("/", async (request, response) => {
    try {
        console.log(request.params);
        console.log(request);

        const rows = (await client.query("SELECT * FROM products")).rows;

        response.json(rows);
        console.log(rows);
    } catch (err) {
        response.status(500).json({ error: "error" });
        console.log(err);
    }
    console.log("hej");
});

app.listen(8080, () => {
    console.log("Webbtjänsten kan nu ta emot anrop.");
});
