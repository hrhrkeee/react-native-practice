import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from "react-native-paper";
import { paperTheme } from "../../theme/paperTheme";

export function CustomTabBar({
  navigation,
  state,
  descriptors,
  insets,
}: BottomTabBarProps) {
  return (
    <BottomNavigation.Bar
      key={`tab-bar-${state.index}`}
      style={{ backgroundColor: paperTheme.colors.primary }}
      activeColor="#ffffff"
      inactiveColor="#c0c0c0"
      activeIndicatorStyle={{
        backgroundColor: "#ffffff60",
      }}
      navigationState={state}
      safeAreaInsets={insets}
      onTabPress={({ route, preventDefault }) => {
        const event = navigation.emit({
          type: "tabPress",
          target: route.key,
          canPreventDefault: true,
        });

        if (!event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      }}
      renderIcon={({ route, focused, color }) => {
        const { options } = descriptors[route.key];
        if (options.tabBarIcon) {
          return options.tabBarIcon({ focused, color, size: 24 });
        }
        return null;
      }}
      getLabelText={({ route }) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        return typeof label === "string" ? label : route.name;
      }}
    />
  );
}
