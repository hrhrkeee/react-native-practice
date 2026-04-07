import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { I18nManager, Platform, StyleSheet, View } from "react-native";
import { Drawer as PaperDrawer, Switch, Text } from "react-native-paper";
import { paperTheme } from "../../theme/paperTheme";

// Navigation screens data - corresponds to tab screens
const NavigationScreensData = [
  {
    label: "Home",
    icon: "home",
    key: 0,
    screen: "index",
  },
  {
    label: "Search",
    icon: "magnify",
    key: 1,
    screen: "search",
  },
  {
    label: "Settings",
    icon: "cog",
    key: 2,
    screen: "settings",
  },
  {
    label: "Others",
    icon: "cog",
    key: 3,
    screen: "others",
  },
];

export function CustomDrawer(props: DrawerContentComponentProps) {
  const [darkMode, setDarkMode] = React.useState(false);
  const [rtlEnabled, setRtlEnabled] = React.useState(false);

  // Get the current active tab index from nested navigation
  // props.state.routes[props.state.index] is the currently focused drawer route (e.g., "(tabs)")
  // We need to check the nested state to get the tab index
  const drawerRoute = props.state.routes[props.state.index];
  let activeIndex = 0;

  if (
    drawerRoute &&
    drawerRoute.state &&
    typeof drawerRoute.state === "object" &&
    "index" in drawerRoute.state
  ) {
    // Access the nested tab index
    activeIndex = (drawerRoute.state as any).index || 0;
  }

  const handleNavigationPress = (screenName: string) => {
    // Navigate to the specific tab screen within the (tabs) navigator
    props.navigation.navigate("(tabs)", { screen: screenName });
    console.log(`Navigation: ${screenName}`);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    console.log(`Dark Mode: ${!darkMode ? "enabled" : "disabled"}`);
  };

  const handleRTLToggle = () => {
    setRtlEnabled(!rtlEnabled);
    I18nManager.forceRTL(!rtlEnabled);
    console.log(`RTL: ${!rtlEnabled ? "enabled" : "disabled"}`);
  };

  const isIOS = Platform.OS === "ios";

  return (
    <DrawerContentScrollView
      {...props}
      alwaysBounceVertical={false}
      contentContainerStyle={{
        paddingHorizontal: 0, // Inspectorの緑色部分(RCTScrollContentView)の左右余白(12px)をゼロにリセット
        // 上部余白(paddingTop)も調整したい場合は、ここで上書きします。
        // （デフォルトはReact NavigationがSafeArea等を加味して自動で70前後に設定しています）
      }}
      style={[
        styles.drawerContent,
        {
          backgroundColor: paperTheme.colors.surface || "#ffffff",
        },
      ]}
    >
      {/* Navigation Section */}
      <PaperDrawer.Section title="Navigation">
        {NavigationScreensData.map((item, index) => (
          <PaperDrawer.Item
            key={item.key}
            label={item.label}
            icon={item.icon}
            active={activeIndex === index}
            onPress={() => handleNavigationPress(item.screen)}
            theme={
              activeIndex === index
                ? {
                    colors: {
                      onSecondaryContainer: paperTheme.colors.onPrimary,
                    },
                  }
                : undefined
            }
            style={
              activeIndex === index
                ? {
                    backgroundColor: paperTheme.colors.primary,
                  }
                : undefined
            }
          />
        ))}
      </PaperDrawer.Section>

      {/* Preferences Section */}
      <PaperDrawer.Section title="Preferences">
        {/* Dark Mode */}
        <PaperDrawer.Item
          label="Dark Mode"
          icon="theme-light-dark"
          onPress={handleDarkModeToggle}
          right={() => (
            <View pointerEvents="none" style={styles.switchWrapper}>
              <Switch value={darkMode} />
            </View>
          )}
        />

        {/* RTL */}
        {!isIOS && (
          <PaperDrawer.Item
            label="RTL"
            icon="translate"
            onPress={handleRTLToggle}
            right={() => (
              <View pointerEvents="none" style={styles.switchWrapper}>
                <Switch value={rtlEnabled} />
              </View>
            )}
          />
        )}
      </PaperDrawer.Section>

      {/* Footer - Version Info */}
      <View style={styles.footer}>
        <Text variant="bodySmall" style={styles.annotation}>
          React Native Paper Version{" "}
          {require("react-native-paper/package.json").version}
        </Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  switchWrapper: {
    justifyContent: "center",
    marginRight: 8, // Adjust to fine-tune Switch position inside item
  },
  footer: {
    paddingHorizontal: 28, // perfectly aligns with MD3 Drawer.Section title
    paddingTop: 16,
    paddingBottom: 24,
  },
  annotation: {
    color: "#666",
  },
});
