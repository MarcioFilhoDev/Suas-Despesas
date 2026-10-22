import Button from "@/components/Button";
import { Link } from "expo-router";
import {
  Keyboard,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignIn() {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      touchSoundDisabled
    >
      <View className="flex-1 bg-app-background px-6">
        <View className="flex-1 justify-center">
          <View className="mb-10">
            <Text className="text-3xl font-bold text-content-primary">
              Boas-vindas!
            </Text>
            <Text className="mt-2 text-base text-content-secondary">
              Acesse sua conta para continuar.
            </Text>
          </View>

          <View className="gap-5">
            <View>
              <Text className="mb-2 text-sm font-medium text-content-secondary">
                E-mail
              </Text>
              <TextInput
                className="h-14 rounded-xl border border-app-border bg-app-surface px-4 text-base text-content-primary"
                placeholder="seu@email.com"
                placeholderTextColor="#94a3b8"
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>

            <View>
              <Text className="mb-2 text-sm font-medium text-content-secondary">
                Senha
              </Text>
              <TextInput
                className="h-14 rounded-xl border border-app-border bg-app-surface px-4 text-base text-content-primary"
                placeholder="Digite sua senha"
                placeholderTextColor="#94a3b8"
                secureTextEntry
                autoComplete="password"
              />
            </View>

            <Button label="Acessar" style="primary" onPress={() => {}} />

            <View className="-mt-2 flex-row justify-center">
              <Text className="text-sm text-content-secondary">
                Ainda não tem uma conta?{" "}
              </Text>

              <Link href={"/SignUp"}>
                <Text className="text-sm font-semibold text-brand-700">
                  Criar conta
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

          <Button label="Entrar com Google" style="secondary" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
