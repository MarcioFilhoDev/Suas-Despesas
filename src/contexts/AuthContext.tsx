import { createContext } from "react";

interface AuthContextData {
  signed: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const signed = true;

  return (
    <AuthContext.Provider value={{ signed }}>{children}</AuthContext.Provider>
  );
}
