const express = require("express");

const configureMiddleware = require("./config/middleware");
const projectRoute = require("./project/project");
const actionRoute = require("./action/action");

// Server
const server = express();
const PORT = 3000;

// Middleware
configureMiddleware(server);

server.use("/api/project", projectRoute);
server.use("/api/action", actionRoute);

server.get("/", (req, res) => {
  res.send("Node...");
});

// Listen
server.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
