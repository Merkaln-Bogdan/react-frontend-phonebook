import { Layout } from "sections/Layout";
import List from "@mui/material/List";

import { useContacts } from "./Contacts.hooks";
import { Form } from "./components/Form";
import { Item } from "./components/Item";

const ContactsPage = () => {
  const { contacts, handleRemove } = useContacts();
  return (
    <Layout>
      <Form />
      <List>
        {contacts &&
          contacts.map((contact: any) => (
            <Item
              key={contact._id}
              onClick={() => handleRemove(contact._id)}
              contact={contact}
            />
          ))}
      </List>
    </Layout>
  );
};

export { ContactsPage };
