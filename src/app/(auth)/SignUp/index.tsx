import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link } from "expo-router";
import { Eye, EyeOff } from "lucide-react-native";
import { useState } from "react";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      touchSoundDisabled
    >
      <ScrollView
        className="flex-1 bg-app-background"
        contentContainerClassName="grow justify-center px-6 py-10"
        keyboardShouldPersistTaps="handled"
      >
        <View>
          <View className="mb-10">
            <Text className="text-3xl font-bold text-content-primary">
              Crie sua conta
            </Text>
            <Text className="mt-2 text-base text-content-secondary">
              Organize suas finanças em um só lugar.
            </Text>
          </View>

          <View className="gap-5">
            <Input label="Nome" placeholder="Como podemos chamar você?" />

            <Input
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoComplete="email"
            />

            <Input
              label="Senha"
              placeholder="Crie uma senha"
              secureTextEntry={!passwordVisible}
              autoComplete="new-password"
            >
              <TouchableOpacity
                className="px-2"
                activeOpacity={0.7}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <Eye size={20} color="#949494" />
                ) : (
                  <EyeOff size={20} color="#949494" />
                )}
              </TouchableOpacity>
            </Input>

            <Button label="Criar conta" style="primary" />

            <View className="-mt-2 flex-row justify-center">
              <Text className="text-sm text-content-secondary">
                Já tem uma conta?{" "}
              </Text>
              <Link replace href="/SignIn">
                <Text className="text-sm font-semibold text-brand-700">
                  Acessar
                </Text>
              </Link>
            </View>
          </View>

          <View className="my-7 flex-row items-center">
            <View className="h-px flex-1 bg-app-border" />
            <Text className="mx-4 text-sm text-content-muted">
              ou continue com
            </Text>
            <View className="h-px flex-1 bg-app-border" />
          </View>

          <Button label="Criar conta com Google" style="secondary" />
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
