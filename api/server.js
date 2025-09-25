import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // Ensure fetch is available in Node.js
// import path from "path";
// const fetch = require("node-fetch");
import process from "process"; // Explicitly import process for ESM environments
dotenv.config({ path: ".env" });
const app = express();
// Load environment variables

app.use(
  cors({
    origin: "https://weather-react-two-delta.vercel.app/", // or dynamic origin
    credentials: true,
  })
);

app.use(express.json());

// const path = require("path");
// app.use(express.static(path.join(__dirname, "../client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

// Proxy route to external API
app.get("/weather", async (req, res) => {
  const city = req.query.q || "";
  const apiKey = process.env.VITE_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
