import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Text, View } from "../../../../components/Themed";
import QuestionMark from "../../../../assets/images/Interrogante.png";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={{
          width: 200,
          height: 200,
    objectFit: "contain",
    alignSelf: "center",
  }} source={QuestionMark} />
      </View>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 80, marginHorizontal: 'auto' }}>
        Logro sacar el objeto de las vias respiratorias?.{" "}
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
            borderColor: "green",
            borderWidth: 2,
            borderRadius: 6,
            padding: 6,
            paddingHorizontal: 10,
          }}
        >
          <Link style={{ fontSize: 18 }} href={"/(tabs)/home"}>Si {">"}</Link>
          </TouchableOpacity>

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
          <Link style={{ fontSize: 18 }} href={"/(tabs)/screens/Atragantamientos/Paso2"}>No {"X"}</Link>
        </TouchableOpacity>
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
  logoImage: {
    objectFit: "contain",
    alignSelf: "center",
  },
});
