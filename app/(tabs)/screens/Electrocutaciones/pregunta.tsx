import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useFocusEffect, Link} from "expo-router";


import { Text, View } from "../../../../components/Themed";


export default function TabTwoScreen() {
  

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
      </View>
      <Text style={{ fontSize: 15, marginTop: 80, width: "80%" }}>
      Es necesaria la reanimación cardiopulmonar?.{" "}
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
          <Link href={'/(tabs)/screens/RCP/Paso1'}>Si {">"}</Link>
     
          <Link href={'/(tabs)/home'}>No {"X"}</Link>

          
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