"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IUserRepo_1 = require("./../IUserRepo");
var UnitOfWork = /** @class */ (function () {
    function UnitOfWork() {
        this.userRepo = new IUserRepo_1.UserRepo();
    }
    return UnitOfWork;
}());
exports.unitOfWork = new UnitOfWork();
