"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IUoW_1 = require("../Repo/UoW/IUoW");
exports.apiUsersGet = function (req, res) {
    IUoW_1.unitOfWork.userRepo.getAll("users").then(function (users) { return res.json(users); });
};
