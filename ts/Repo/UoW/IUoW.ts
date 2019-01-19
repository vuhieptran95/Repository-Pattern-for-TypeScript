import { Iusersrepo, UserRepo } from "./../IUserRepo";
export interface IunitOfWork {
  userRepo: Iusersrepo;
}

class UnitOfWork implements IunitOfWork {
  /**
   *
   */
  userRepo: Iusersrepo;
  constructor() {
    this.userRepo = new UserRepo();
  }
}

export const unitOfWork = new UnitOfWork();
