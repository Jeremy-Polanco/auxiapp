import { Image, ScrollView, StyleSheet, Text } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import Logo from "../../assets/icons/logo.png";
import { View } from "../../components/Themed";
import { Link } from "expo-router";

const buttons = [
  {
    id: 1,
    title: "Electrocutacion",
    href: "/(tabs)/screens/Electrocutaciones/Paso1",
  },
  { id: 2, title: "Quemaduras", href: "/(tabs)/screens/Quemaduras/Paso1" },
  { id: 3, title: "Incendio", href: "/(tabs)/screens/Incendios/Paso1" },
  {
    id: 4,
    title: "Intoxicacion",
    href: "/(tabs)/screens/Intoxicaciones/Paso1",
  },
  {
    id: 5,
    title: "Hemorragia Nasal",
    href: "/(tabs)/screens/HemorragiaNasal/hemorragia",
  },
  {
    id: 6,
    title: "Hemorragia Herida",
    href: "/(tabs)/screens/HemorragiaHerida/Paso1",
  },
  {
    id: 7,
    title: "Atragantamiento",
    href: "/(tabs)/screens/Atragantamientos/Paso1",
  },
  {
    id: 8,
    title: "Hipoglucemia",
    href: "/(tabs)/screens/Hipoglucemia/pregunta",
  },
  { id: 9, title: "Fractura", href: "/(tabs)/screens/Fractura/Paso1" },
  { id: 10, title: "RCP", href: "/(tabs)/screens/RCP/Paso1" },
];

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logoImage} />
      </View>
      <View style={styles.buttonWrapper}>
        {buttons.map(({ id, title, href }) => {
          return (
            <Link key={id} href={{ pathname: href }} asChild>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonWrapper: {
    flex: 1,
    gap: 15,
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    width: 300,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  logoImage: {
    objectFit: "contain",
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 17    ,
    fontWeight: "bold",
    color: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
