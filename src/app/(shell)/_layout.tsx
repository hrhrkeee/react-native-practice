import { Drawer } from "expo-router/drawer";
import { CustomDrawer } from "@/components/layout/CustomDrawer";

export default function ShellLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
