import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { Drawer as PaperDrawer } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { paperTheme } from "../../theme/paperTheme";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const insets = useSafeAreaInsets();

  return (
    <PaperDrawer.Section
      title="a"
      style={{ paddingTop: insets.top, backgroundColor: "#ffffff" }}
    >
      <PaperDrawer.Item label="テスト" />
      <PaperDrawer.Item
        label="Home"
        icon="home"
        active={props.state.index === 0}
        onPress={() => props.navigation.navigate("(tabs)")}
        style={{
          backgroundColor: paperTheme.colors.primary, // 非active時に分かりやすい薄赤
        }}
        theme={{
          colors: {
            onSecondaryContainer: "#ffffff", // active文字/アイコン: 黄
          },
        }}
      />
    </PaperDrawer.Section>
  );
}
