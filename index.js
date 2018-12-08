const express = require("express");


// Server
const server = express();
const PORT = 3000;

// Middleware

server.get("/", (req, res) => {
  res.send("Node...");
});

// Listen
server.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
