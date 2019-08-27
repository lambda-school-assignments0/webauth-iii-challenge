// require dependencies
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const jwt = require("jsonwebtoken");

// routers
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");

// server
const server = express();

// server pipeline
server.use(helmet());
server.use(express.json());
server.use(cors());

// server pipeline - routes
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

// server crud operations
server.get("/", (req, res) => {
    res.send("Now witness the power of this fully armed and operational battle server. Fire at will, commander.");
});

module.exports = server;
