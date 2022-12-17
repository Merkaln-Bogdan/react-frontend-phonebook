import { fetch } from "http-common";

type ContactData = {};

type ContactDataLIst = Omit<any, "content"> & { content: ContactData[] };

class ContactsDataService {
  private http = fetch();

  private ep = "/api/contacts";

  public async getAll() {
    return this.http.get<ContactDataLIst>(`${this.ep}`);
  }

  public async postContact(data: any) {
    return this.http.post<ContactData>(`${this.ep}`, data);
  }
}

const contactsDataService = new ContactsDataService();

export { contactsDataService };
