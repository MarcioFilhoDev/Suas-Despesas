import { Text, TextInput, View } from "react-native";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label: string;
  children?: React.ReactNode;
}

export default function Input({ label, children, ...props }: InputProps) {
  return (
    <View>
      <Text className="mb-2 text-sm font-medium text-content-secondary">
        {label}
      </Text>

      {children ? (
        <View className="flex flex-row items-center h-14 rounded-xl border border-app-border bg-app-surface px-4 ">
          <TextInput
            {...props}
            className="flex-1 text-base text-content-primary"
            placeholderTextColor="#94a3b8"
            autoCapitalize="none"
            autoComplete="email"
          />

          {children}
        </View>
      ) : (
        <TextInput
          {...props}
          className="h-14 rounded-xl border border-app-border bg-app-surface px-4 text-base text-content-primary"
          placeholderTextColor="#94a3b8"
          autoCapitalize="none"
          autoComplete="email"
        />
      )}
    </View>
  );
}
