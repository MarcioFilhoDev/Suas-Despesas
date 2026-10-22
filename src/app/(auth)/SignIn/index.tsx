import Button from "@/components/Button";
import Input from "@/components/Input";
import { Link } from "expo-router";
import { CheckSquare, Eye, EyeOff, Square } from "lucide-react-native";
import { useState } from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [keepConnected, setKeepConnected] = useState(false);

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
            <Input
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
            />

            <Input
              label="Senha"
              placeholder="Digite sua senha"
              keyboardType="default"
              secureTextEntry={!passwordVisible}
            >
              <TouchableOpacity
                className="px-2"
                activeOpacity={0.7}
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <Eye size={20} color={"#949494"} />
                ) : (
                  <EyeOff size={20} color={"#949494"} />
                )}
              </TouchableOpacity>
            </Input>

            <Pressable
              onPress={() => setKeepConnected(!keepConnected)}
              className="flex flex-row gap-2 items-center ml-2"
            >
              {keepConnected ? <CheckSquare size={16} /> : <Square size={16} />}

              <Text className="text-sm text-primary">Manter conectado</Text>
            </Pressable>

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
