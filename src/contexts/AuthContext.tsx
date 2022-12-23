/* eslint @typescript-eslint/no-explicit-any: 0 */
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { setUser } from "redux/slices/user.slice";
import { useAppDispatch } from "redux/hooks";

import { usersDataService } from "services/user.service";

export enum AuthStatus {
  Loading,
  SignedIn,
  SignedOut,
}

export interface IAuth {
  authStatus?: AuthStatus;
  signInWithEmail?: any;
  signOut?: any;
}

type AuthProps = {
  children: React.ReactNode;
};

const defaultState: IAuth = {
  authStatus: AuthStatus.Loading,
};

export const AuthContext = createContext(defaultState);

export function AuthIsSignedIn(props: AuthProps): React.ReactElement {
  const { children } = props;
  const { authStatus }: IAuth = useContext(AuthContext);

  // eslint-disable-next-line
  return <>{authStatus === AuthStatus.SignedIn ? children : null}</>;
}

export function AuthIsNotSignedIn(props: AuthProps): React.ReactElement {
  const { children } = props;
  const { authStatus }: IAuth = useContext(AuthContext);

  // eslint-disable-next-line
  return <>{authStatus === AuthStatus.SignedOut ? children : null}</>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  children,
}) => {
  const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);

  const dispatch = useAppDispatch();

  async function signInWithEmail(data: any) {
    try {
      await usersDataService
        .login(data)
        .then((res) =>
          window.localStorage.setItem("accessToken", `${res.data.token}`)
        );
      setAuthStatus(AuthStatus.SignedIn);
    } catch (err) {
      setAuthStatus(AuthStatus.SignedOut);
      throw err;
    }
  }

  function signOut() {
    signOut();
    window.localStorage.removeItem("accessToken");

    setAuthStatus(AuthStatus.SignedOut);
  }

  const state: IAuth = useMemo(
    () => ({
      authStatus,
      signInWithEmail,
      signOut,
    }),
    [authStatus]
  );

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        await usersDataService
          .getCurrentUser()
          .then((res) => dispatch(setUser(res.data)));
        setAuthStatus(AuthStatus.SignedIn);
      } catch (err) {
        setAuthStatus(AuthStatus.SignedOut);
        console.log(err);
      }
    };

    getUserInfo();
  }, []);

  if (authStatus === AuthStatus.Loading) {
    return null;
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};
