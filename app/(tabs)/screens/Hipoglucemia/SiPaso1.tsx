import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../../../components/Themed";


export default function TabTwoScreen() {
 

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
       Si esta consciente darle rapidamente por via oral de 10 a 20gr de azúcar:
       Aproximadamente 10gr de azúcar equivalen a 
       - 1 vaso de zumo de fruta
       - 2 1/2 cucharadas o dos terrones de azucar
       - 1 sobre de azucar de cafeteria
       - 2 caramelos
       - 2 cucharas de miel 
       - 1 vaso de refresco de naranja o coca cola{" "}
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
