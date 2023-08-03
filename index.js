const jsonServer = require("json-server"); // importing json-server library
const express = require("express");

const app = express();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001

app.use(middlewares);
app.use(router);

app.listen(port);