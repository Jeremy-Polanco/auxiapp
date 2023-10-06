
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";

export default function Home() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonWrapper}>
        <Text style={styles.buttonLabel}>Presioname mio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    width: 250,
    height: 250,
    borderRadius: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  buttonLabel: {
    color: "white",
  },
});
