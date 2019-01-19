import { db } from "../config/FirebaseConfig";
import { User } from "../interfaces/models/user";
import * as express from "express";
import { UserRepo, Iusersrepo } from "../Repo/IUserRepo";
import { unitOfWork } from "../Repo/UoW/IUoW";

export const apiUsersGet = (req: express.Request, res: express.Response) => {
  unitOfWork.userRepo.getAll("users").then(users => res.json(users));
};
