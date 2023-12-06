import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useFocusEffect, Link} from "expo-router";
import { Text, View } from "../../../../components/Themed";
import multi from "../../../../assets/images/Atragantamientospaso3.gif";

export default function TabTwoScreen() {
  const navigation = useRouter();
 const initialTime = 10;
  const [time, setTime] = useState(initialTime);
useEffect(() => {if(time === 0){
  navigation.push('/(tabs)/screens/Atragantamientos/pregunta')
}}, [time] )
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useFocusEffect(
    React.useCallback(() => {
      // Start the timer when the screen comes into focus
      setTime(initialTime);
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Image
          style={{
            width: 250,
            height: 250,
            objectFit: "cover",
          }}
          source={multi}
        />
      </View>
      <Text style={{ fontSize: 15, marginTop: 80, width: "80%" , textAlign: "justify" }}>
      Maniobra de HEIMLICH
      Realice una fuerte presión hacia adentro y hacia arriba, repitiendo de 6 a 8 veces.{" "}
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
          <Link href={'/(tabs)/home'}>Saltar {">>"}</Link>
     
          </TouchableOpacity>

        <Text>Tiempo: {time}</Text>
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
