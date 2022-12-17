import { routes } from "data/routes";
import { ContactsPage } from "page/Contacts";
import { HomePage } from "page/Home";
import { LoginPage } from "page/Login";
import { SignUpPage } from "page/SignUp";
import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { contactsDataService } from "services/contact.service";
import { usersDataService } from "services/user.service";
import "./App.css";

function App() {
  useEffect(() => {
    contactsDataService.getAll().then((res) => console.log(res.data));
  }, []);
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />

      <Route path={routes.login} element={<LoginPage />} />

      <Route path={routes.register} element={<SignUpPage />} />
      <Route path={routes.contacts} element={<ContactsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
