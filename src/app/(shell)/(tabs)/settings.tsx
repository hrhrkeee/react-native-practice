import { AppScreen } from "@/components/screens/AppScreen";
import { useState } from "react";
import { Button, Card, Text, TextInput } from "react-native-paper";

export default function SettingsScreen() {
  const [name, setName] = useState("");

  return (
    <AppScreen title="Settings">
      <Card>
        <Card.Content>
          <Text variant="headlineSmall">React Native Paper Base</Text>
          <Text variant="bodyMedium" style={{ marginTop: 8 }}>
            この画面を基準に、以後の画面も Paper
            コンポーネント中心で増やします。
          </Text>

          <TextInput
            mode="outlined"
            label="名前入力欄"
            value={name}
            placeholder="ここに何かを入力してください"
            onChangeText={setName}
            style={{ marginTop: 16 }}
          />

          <Button mode="contained" onPress={() => {}} style={{ marginTop: 16 }}>
            Continue
          </Button>
        </Card.Content>
      </Card>
    </AppScreen>
  );
}
