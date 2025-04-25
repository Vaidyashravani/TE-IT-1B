// server.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/register", (req, res) => {
  console.log("User data received:", req.body);
  res.status(200).send("User data received successfully");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
