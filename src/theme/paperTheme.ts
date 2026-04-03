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
    elevation: {
      level0: "transparent",
      level1: "rgb(248, 242, 251)",
      level2: "#ffffff",
      level3: "rgb(240, 231, 246)",
      level4: "rgb(239, 229, 245)",
      level5: "rgb(236, 226, 243)",
    },
  },
};

export type AppTheme = typeof paperTheme;
