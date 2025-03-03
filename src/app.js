import "dotenv/config";
import express from "express";

const app = express();

const greetings = [
  { text: "Hello", language: "English", comment: "A common greeting" },
  { text: "Hi", language: "English", comment: "A casual greeting" },
  { text: "Good morning", language: "English", comment: "A morning greeting" },
  { text: "你好", language: "Mandarin", comment: "Hello" },
  { text: "早上好", language: "Mandarin", comment: "Good morning" },
  { text: "晚上好", language: "Mandarin", comment: "Good evening" },
  { text: "こんにちは", language: "Japanese", comment: "Hello" },
  { text: "おはようございます", language: "Japanese", comment: "Good morning" },
  { text: "こんばんは", language: "Japanese", comment: "Good evening" },
  { text: "Kia ora", language: "Maori", comment: "Hello" },
  {
    text: "Tēnā koe",
    language: "Maori",
    comment: "Formal greeting to one person"
  },
  { text: "Mōrena", language: "Maori", comment: "Good morning" },
  { text: "Hola", language: "Spanish", comment: "Hello" },
  { text: "Buenos días", language: "Spanish", comment: "Good morning" },
  { text: "Buenas tardes", language: "Spanish", comment: "Good afternoon" }
];

app.get("/greeting/random", (req, res) => {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  res.json(randomGreeting);
});

const port = process.env.PORT ?? 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
