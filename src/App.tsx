import { routes } from "data/routes";
import { ContactsPage } from "page/Contacts";
import { HomePage } from "page/Home";

import { SignUpPage } from "page/SignUp";

import { Provider } from "react-redux";
import { store } from "redux/store";

import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";
import {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
  AuthProvider,
} from "contexts/AuthContext";

function App() {
  function SignInRoute(): React.ReactElement {
    return (
      <Routes>
        <Route path="/" element={<Navigate to={routes.login} />} />

        <Route path={routes.login} element={<SignUpPage />} />
        <Route path={routes.register} element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }
  function MainRoute(): React.ReactElement {
    return (
      <Routes>
        <Route path={routes.home} element={<HomePage />} />

        <Route path={routes.contacts} element={<ContactsPage />} />
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Routes>
    );
  }

  return (
    <Provider store={store}>
      <Router>
        <AuthProvider>
          <AuthIsNotSignedIn>
            <SignInRoute />
          </AuthIsNotSignedIn>

          <AuthIsSignedIn>
            <MainRoute />
          </AuthIsSignedIn>
        </AuthProvider>
      </Router>
    </Provider>
  );
}

export default App;
