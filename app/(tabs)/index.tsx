
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from "../../components/Themed";

export default function Home() {

  const ActivarAlerta = async () => {
    try {
       // await AsyncStorage.removeItem('datos-formulario');
      const jsonValue = await AsyncStorage.getItem('datos-formulario');
      if(jsonValue != null){

        //ENVIAR CORREOS CON 
        // DATOS PERSONALES
        // UBICACION
        // LUEGO REALIZAR UNA LLAMADA AUTOMATICA AL 911



      }      
    } catch (e) {
        console.log('Error al leer los datos')
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonWrapper} onPress={ActivarAlerta}>
        <Text style={styles.buttonLabel}>Presioname mio</Text>
      </TouchableOpacity>
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
    backgroundColor: "red",
  },
  buttonLabel: {
    color: "white",
  },
});
