import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useFocusEffect, Link} from "expo-router";
import multi from "../../../../assets/images/Quemaduraspaso2.gif";

import { Text, View } from "../../../../components/Themed";


export default function TabTwoScreen() {
  const navigation = useRouter();
  const initialTime = 10;
   const [time, setTime] = useState(initialTime);
 useEffect(() => {if(time === 0){
   navigation.push('/(tabs)/home')
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
        <Image
          style={{
            width: 250,
            height: 250,
            objectFit: "cover",
          }}
          source={multi}
        />
      </View>
      <Text style={{ fontSize: 18, marginTop: 80, width: "80%" , textAlign: "justify" }}>
       Cubrir la piel con una tela limpia o gasas. {" "}
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
          <Link style={{ fontSize: 18 }} href={'/(tabs)/home'}>Saltar {">>"}</Link>
     
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
