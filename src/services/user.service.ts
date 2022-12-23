import { fetch } from "http-common";

type User = {
  id: string;
  name: string;
  email: string;
  subscription: string;
  avatarURL: string;
  token: string;
};

type UserData = Omit<object, "content"> & { token: User };

class UsersDataService {
  private http = fetch();

  private ep = "/auth";

  public async getCurrentUser() {
    return this.http.get<UserData>(`${this.ep}/current`);
  }

  public async register() {
    return this.http.get<UserData>(`${this.ep}/register`);
  }

  public async login(data: any) {
    return this.http.post<UserData>(`${this.ep}/signin`, data);
  }
}

const usersDataService = new UsersDataService();

export { usersDataService };
