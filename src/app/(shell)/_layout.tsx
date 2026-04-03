import { CustomDrawer } from "@/components/layout/CustomDrawer";
import { Drawer } from "expo-router/drawer";

export default function ShellLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "front",
        drawerStyle: {
          width: "70%",
        },
      }}
    />
  );
}
