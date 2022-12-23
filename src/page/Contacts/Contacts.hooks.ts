import { useEffect } from "react";
import { contactsDataService } from "services/contact.service";
import { contactsSelector, setAllContacts } from "redux/slices/contact.slice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

const useContacts = () => {
  const contacts = useAppSelector(contactsSelector.selectAll);
  const dispatch = useAppDispatch();

  console.log(contacts);
  useEffect(() => {
    contactsDataService
      .getAll()
      .then((res) => dispatch(setAllContacts(res.data)));
  }, [dispatch]);

  const handleRemove = (id: string) => {
    contactsDataService
      .deleteContact(id)
      .then((res) => dispatch(setAllContacts(res.data)));
  };

  return { contacts, handleRemove };
};

export { useContacts };
