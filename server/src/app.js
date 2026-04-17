const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.post("/api/orders", (req, res) => {
  console.log(req.body);

  const orderNumber = Math.floor(100000 + Math.random() * 900000);

  res.status(201).json({
    message: "Заказ получен",
    orderNumber,
    order: req.body,
  });
});

module.exports = app;
