import { paperTheme } from "@/theme/paperTheme";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider theme={paperTheme}>
          <Stack screenOptions={{ headerShown: false }} />
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
