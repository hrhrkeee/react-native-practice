import { AppScreen } from "@/components/screens/AppScreen";
import { useState } from "react";
import { Text } from "react-native-paper";

export default function HomePage() {
  const [name, setName] = useState("");

  return (
    <AppScreen title="Home">
      <Text>サンプルテキスト</Text>
    </AppScreen>
  );
}
