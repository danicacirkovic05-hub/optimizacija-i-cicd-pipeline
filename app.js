const express = require("express");
const app = express();

function saberi(a, b) {
  return a + b;
}

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date() });
});

app.get("/saberi", (req, res) => {
  const rezultat = saberi(5, 10);
  res.json({ rezultat: rezultat });
});

module.exports = { app, saberi };
