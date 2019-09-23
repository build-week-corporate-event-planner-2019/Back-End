const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const Auth = require("./middleware/auth-middleware.js");

const usersRouter = require("./users/users-router.js");
const eventsRouter = require("./events/events-router.js");
const todosRouter = require("./todos/todos-router.js");
const itemsRouter = require("./items/items-router.js");
const vendorsRouter = require("./vendors/vendors-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/events", Auth.restricted, eventsRouter);
server.use("/api/todos", Auth.restricted, todosRouter);
server.use("/api/items", Auth.restricted, itemsRouter);
server.use("/api/vendors", Auth.restricted, vendorsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server up and running!" });
});

module.exports = server;
