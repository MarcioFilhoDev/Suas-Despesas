import { AuthContext } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";

export default function Index() {
  const { signed } = useContext(AuthContext);

  if (signed) {
    return <Redirect href={"/(painel)/ExpenseList"} />;
  }

  return <Redirect href={"/SignIn"} />;
}
