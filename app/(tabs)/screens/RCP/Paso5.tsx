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
      Aprieta las fosas nasales y cubre su boca con la tuya dando una respiración de un segundo.
       Si el pecho se eleva da otra respiración. Si no, vuelve a abrir las vías respiratorias y repite.
       Reinicia el ciclo de 30 compresiones y dos respiraciones hasta que sea necesario.{" "}
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
