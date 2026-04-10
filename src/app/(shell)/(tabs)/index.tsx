import { AppScreen } from "@/components/screens/AppScreen";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Dialog, Portal, Snackbar, Text } from "react-native-paper";

export default function HomePage() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [snackbarvisible, setsnackbarVisible] = useState(false);
  const onToggleSnackBar = () => setsnackbarVisible(!snackbarvisible);
  const onDismissSnackBar = () => setsnackbarVisible(false);

  return (
    <AppScreen title="Home">
      <Text>サンプルテキスト</Text>

      <Button
        mode="contained"
        onPress={() => setCount((prev) => prev + 1)}
        style={{ marginTop: 16 }}
      >
        カウントアップ
      </Button>

      <Text style={{ marginTop: 16 }}>{count}</Text>

      <Button
        mode="contained"
        onPress={() => setCount(0)}
        style={{ marginTop: 16, backgroundColor: "gray" }}
      >
        リセット
      </Button>

      <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Text variant="bodyMedium">This is simple dialog</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>

      <View style={styles.container}>
        <Button onPress={onToggleSnackBar}>
          {snackbarvisible ? "Hide" : "Show"}
        </Button>
        <Snackbar
          visible={snackbarvisible}
          onDismiss={onDismissSnackBar}
          wrapperStyle={{ paddingBottom: 0 }}
          contentStyle={{ backgroundColor: "red" }}
          style={{ backgroundColor: "yellow" }}
          action={{
            label: "Undo",
            onPress: () => {
              // Do something
            },
          }}
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
