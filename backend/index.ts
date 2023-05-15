import cors from "cors";
import express from "express";

const app = express();

app.use(cors());

app.get("/", (request, response) => {
  console.log("hej");
  response.send("Hello World!kkkkkkkk!!");
});

app.listen(8080, () => {
  console.log("Webbtjänsten kan nu ta emot anrop.");
});
