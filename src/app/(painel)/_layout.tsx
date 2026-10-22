import { Tabs } from "expo-router";

export default function PainelLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="ExpenseList" />
      <Tabs.Screen name="NewExpense" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
}
