import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useFocusEffect, Link} from "expo-router";

import { Text, View } from "../../../../components/Themed";
// import multi from "../../../../assets/images/RCPpaso4.gif";


export default function TabTwoScreen() {
  const navigation = useRouter();
  const initialTime = 10;
   const [time, setTime] = useState(initialTime);
 useEffect(() => {if(time === 0){
   navigation.push('/(tabs)/screens/RCP/Paso5')
 }}, [time] )
 const [isScreenFocused, setIsScreenFocused] = useState(true);
 useEffect(() => {
   const interval = setInterval(() => {
     if (time > 0) {
       setTime(time - 1);
     }
   }, 1000);

   if (!isScreenFocused) {
    clearInterval(interval);
   }

   return () => clearInterval(interval);
 }, [time]);

 useFocusEffect(
   React.useCallback(() => {
      setIsScreenFocused(true);
     // Start the timer when the screen comes into focus
     setTime(initialTime);

     return () => setIsScreenFocused(false);
   }, [])
 );

  function formatSeconds(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        {/* <Image
          style={{
            width: 250,
            height: 250,
            objectFit: "cover",
          }}
          source={multi}
        /> */}
      </View>
      <Text style={{ fontSize: 16, marginTop: 80, width: "80%" }}>
      comienza la ventilación: abre las vías respiratorias inclinando la cabeza
       de la persona hacia atrás y levantando su mentón. Si temes contagio de covid-19 o 
       no tienes experiencia en RCP puedes no ventilar.{" "}
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
            width: 100,
            borderColor: "red",
            borderWidth: 2,
            borderRadius: 6,
            padding: 6,
            paddingHorizontal: 10,
          }}
        >
         <Link style={{ fontSize: 18 }} href={'/(tabs)/screens/RCP/Paso5'}>Saltar {">>"}</Link>
        </TouchableOpacity>

        <Text style={{ fontSize: 18 }}>Tiempo: {formatSeconds(time)}</Text>
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
