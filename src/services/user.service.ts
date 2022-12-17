import { fetch } from "http-common";

type User = {
  id: string;
  name: string;
  email: string;
  subscription: string;
  avatarURL: string;
};

type UserData = Omit<object, "content"> & { content: User };

class UsersDataService {
  private http = fetch();

  private ep = "/auth";

  public async getUserData() {
    return this.http.get<UserData>(`${this.ep}`);
  }

  public async register() {
    return this.http.get<UserData>(`${this.ep}/register`);
  }
}

const usersDataService = new UsersDataService();

export { usersDataService };
