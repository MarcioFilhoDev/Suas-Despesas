import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

import AuthProvider from "@/contexts/AuthContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <SafeAreaView
          edges={["top", "left", "right"]}
          className="flex-1 bg-white"
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(painel)" />
            <Stack.Screen name="index" />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthProvider>
  );
}
