import { Image, StyleSheet, TouchableOpacity } from "react-native";

import { Text, View } from "../../../../components/Themed";
import { Link } from "expo-router";
import QuestionMark from '../../../../assets/images/Interrogante.png';


export default function TabTwoScreen() {
 

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
      </View>
      <View>
        <Image style={{
          width: 200,
          height: 200,
    objectFit: "contain",
    alignSelf: "center",
  }} source={QuestionMark} />
      </View>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 80, marginHorizontal: 'auto'  }}>
      La persona esta consciente?.{" "}
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
          <Link style={{ fontSize: 18 }} href={'/(tabs)/screens/Hipoglucemia/SiPaso1'}>Si {">"}</Link>
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
           <Link style={{ fontSize: 18 }} href={'/(tabs)/screens/Hipoglucemia/NoPaso1'}>No {"X"}</Link>
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
});
