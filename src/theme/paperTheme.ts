import { MD3LightTheme } from "react-native-paper";

export const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#C62828",
    onPrimary: "#ffffff",
    secondary: "#4A5E73",
    tertiary: "#2E7D67",
    primaryContainer: "#FF8A80",
  },
};

export type AppTheme = typeof paperTheme;
