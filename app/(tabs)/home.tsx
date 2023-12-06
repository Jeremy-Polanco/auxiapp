import { Image, StyleSheet, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../assets/icons/logo.png";
import { View } from "../../components/Themed";
import { Link } from "expo-router";

const buttons = [
  { id: 1, title: "Electrocutacion", href: "/(tabs)/screens/Electrocutaciones/Paso1" },
  { id: 2, title: "Quemaduras", href: "/(tabs)/screens/Quemaduras/Paso1" },
  { id: 3, title: "Incendio", href: "/(tabs)/screens/Incendios/Paso1" },
  { id: 4, title: "Intoxicacion", href: "/(tabs)/screens/Intoxicaciones/Paso1" },
  { id: 5, title: "Hemorragia Nasal", href: "/(tabs)/screens/HemorragiaNasal/hemorragia" },
  { id: 6, title: "Hemorragia Herida", href: "/(tabs)/screens/HemorragiaHerida/Paso1" },
  { id: 7, title: "Atragantamiento", href: "/(tabs)/screens/Atragantamientos/Paso1" },
  { id: 8, title: "Hipoglucemia", href: "/(tabs)/screens/Hipoglucemia/pregunta" },
  { id: 9, title: "Fractura", href: "/(tabs)/screens/Fractura/Paso1" },
  { id: 10, title: "RCP", href: "/(tabs)/screens/RCP/Paso1" },
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
            <Link key={id} href={{ pathname: href}}>
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
