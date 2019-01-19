"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_users_1 = require("./services/api-users");
var app = express();
app.get("/", function (req, res) {
    res.send("Server TS works");
});
// app.get("/api/users", apiUsersGet);
app.route("/api/users").get(api_users_1.apiUsersGet);
app.listen(Number(process.env.port) || 3001, "localhost", function () { return console.log("Server TS started"); });
