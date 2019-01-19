import { Irepo } from "./IRepo";
import { User } from "../interfaces/models/user";
import { Repo } from "./Repo";
import { db } from "../config/FirebaseConfig";

export interface Iusersrepo extends Irepo<User> {
  getFirst5users(collectionName: string): Promise<User[]>;
}

export class UserRepo extends Repo<User> implements Iusersrepo {
  async getFirst5users(collectionName: string): Promise<User[]> {
    const response = await db
      .collection(collectionName)
      .limit(5)
      .get();
    return response.docs.map(doc => {
      const user: User = { id: doc.id, ...doc.data() } as User;
      return user;
    });
  }
}
