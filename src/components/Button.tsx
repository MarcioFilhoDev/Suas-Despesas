import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  label?: string;
  onPress?: () => void;
  style?: "primary" | "secondary";
  children?: React.ReactNode;
}

export default function Button({
  label,
  style,
  onPress,
  children,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={
        style == "primary"
          ? `h-12 items-center justify-center rounded-xl bg-brand-600`
          : `h-12 flex-row items-center justify-center rounded-xl border border-app-border bg-app-surface`
      }
    >
      {label && (
        <Text
          className={
            style == "primary"
              ? `text-[16px] font-semibold text-app-surface`
              : "text-base font-semibold text-content-secondary"
          }
        >
          {label}
        </Text>
      )}

      {children}
    </TouchableOpacity>
  );
}
