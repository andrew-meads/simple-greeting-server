import "dotenv/config";
import express from "express";
import cors from "cors";
import { greetings } from "./greetings.js";

const app = express();

app.use(cors());

app.get("/greeting/random", (req, res) => {
  const { language } = req.query;
  const filteredGreetings = language
    ? greetings.filter((greeting) => greeting.language.toLowerCase() === language.toLowerCase())
    : greetings;

  if (filteredGreetings.length === 0)
    return res.status(404).json({ message: "No greetings found for the specified language." });

  const randomGreeting = filteredGreetings[Math.floor(Math.random() * filteredGreetings.length)];
  res.json(randomGreeting);
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
