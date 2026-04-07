import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { Appbar, Surface, useTheme } from "react-native-paper";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

type Props = PropsWithChildren<{
  title: string;
}>;

export function AppScreen({ title, children }: Props) {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea} edges={["left", "right"]}>
      <Appbar.Header
        mode="center-aligned"
        elevated
        dark
        style={[styles.appbar, { backgroundColor: theme.colors.primary }]}
      >
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        <Appbar.Content title={title} />
        <Appbar.Action
          icon="cog"
          onPress={() => console.log("Settings pressed")}
        />
      </Appbar.Header>
      <Surface style={[styles.content, { paddingBottom: 16 + insets.bottom }]}>
        {children}
      </Surface>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  appbar: {
    justifyContent: "center",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
