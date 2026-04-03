import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer as PaperDrawer } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();

  return (
    <PaperDrawer.Section title="a" style={{ paddingTop: insets.top }}>
      <PaperDrawer.Item label="テスト" />
      <PaperDrawer.Item
        label="Home"
        icon="home"
        active={props.state.index === 0}
        onPress={() => props.navigation.navigate("(tabs)")}
      />
    </PaperDrawer.Section>
  );
}
