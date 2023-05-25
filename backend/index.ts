import cors from "cors";
import express from "express";
const dotenv = require("dotenv"),
    { Client } = require("pg");

const path = require("path");

dotenv.config();

const client = new Client({
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
});

client.connect();

const app = express();
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));

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

app.get("/:id", async (request, response) => {
    try {
        const id = request.params.id;
        const query = "SELECT * FROM products WHERE id = $1";
        const rows = (await client.query(query, [id])).rows;

        if (rows.length > 0) {
            console.log("id hittat");

            response.json(rows[0]);
        } else {
            response.status(404).json({ error: "Produkten hittades inte" });
        }
    } catch (err) {
        console.log({ error: "hoppsan" });
        response.status(500).json({ error: "Nejnejnej" });
    }
});

app.listen(8081, () => {
    console.log("Webbtjänsten kan nu ta emot anrop.");
});
