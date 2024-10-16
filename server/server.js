import dotenv from 'dotenv';
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to the Backend world of CollaborateX");
});

app.listen(() => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
