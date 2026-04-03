import { Tabs } from "expo-router";
import { CustomTabBar } from "@/components/layout/CustomTabBar";
import Icon from "@react-native-vector-icons/material-design-icons";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
             <Icon name="home" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
