import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useFocusEffect, Link} from "expo-router";
import multi from "../../../../assets/images/Intoxicacionpaso3.gif";

import { Text, View } from "../../../../components/Themed";


export default function TabTwoScreen() {
  const navigation = useRouter();
  const initialTime = 10;
   const [time, setTime] = useState(initialTime);
 useEffect(() => {if(time === 0){
   navigation.push('/(tabs)/screens/Intoxicaciones/Paso2')
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
        Quitarse la ropa empapada en el producto{" "}
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
            <Link href={'/(tabs)/screens/Intoxicaciones/Paso2'}>Saltar {">>"}</Link>
     
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
