import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Multi-Tenant API");
});

app.get("/health", (req, res) => {
  res.send("OK");
});
