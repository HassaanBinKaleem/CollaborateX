require("dotenv").config();
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to the Backend world of CollaborateX");
});

app.listen(() => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
