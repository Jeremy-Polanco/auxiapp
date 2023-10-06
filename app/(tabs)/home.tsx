import { Image, StyleSheet, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../assets/icons/logo.jpeg";
import { View } from "../../components/Themed";
import { Link } from "expo-router";

const buttons = [
  { id: 1, title: "Hemorragia", href: "/(tabs)/[id]" },
  { id: 2, title: "Botón 2", href: "" },
  { id: 3, title: "Botón 3", href: "" },
  { id: 4, title: "Botón 4", href: "" },
  { id: 5, title: "Botón 5", href: "" },
  { id: 6, title: "Botón 6", href: "" },
  { id: 7, title: "Botón 7", href: "" },
];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.buttonWrapper}>
        {buttons.map(({ id, title, href }) => {
          return (
            <Link key={id} href={{ pathname: href, params: { id } }}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
      <Text style={{ marginTop: 10 }}>
        ¿Alguna sugerencia?
        <Link style={{ color: "#00308F", marginTop: 10 }} href={"/two"}>
          {" "}
          Click Aquí
        </Link>
      </Text>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "white",
  },
  button: {
    width: 80,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  logoImage: {
    height: "60%",
    objectFit: "contain",
  },
  buttonText: {
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
