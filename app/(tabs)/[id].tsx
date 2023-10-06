import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../components/Themed";
import { useLocalSearchParams } from "expo-router";

export default function TabTwoScreen() {
  const { id } = useLocalSearchParams();

  console.log(id);

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Image
          style={{
            width: 250,
            height: 250,
            objectFit: "cover",
          }}
          source={{
            uri: "https://slpproprope001.blob.core.windows.net/2018/Proyectos/Proy010/Recursos/P10_ANI06/img/img10.gif",
          }}
        />
      </View>
      <Text style={{ fontSize: 15, marginTop: 80, width: "80%" }}>
        Ante una hemorragia nasal, lo primero que hay que hacer es inclinar la
        cabeza para evitar tragar sangre. A la vez presiona la nariz durante
        unos minutos hasta que deje de sangrar{" "}
      </Text>
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 100,
        }}
      >
        <TouchableOpacity
          style={{
            width: 80,
            borderColor: "red",
            borderWidth: 2,
            borderRadius: 6,
            padding: 6,
            paddingHorizontal: 10,
          }}
        >
          <Text>Saltar {">>"}</Text>
        </TouchableOpacity>

        <Text>Tiempo: 00</Text>
      </View>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
