import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "../../components/Themed";
import axios from "axios";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert } from 'react-native';
import { useRouter } from "expo-router";

export default function Home() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const ActivarAlerta = async () => {
    //SOLICITAR PERMISOS PARA OBTENER LA UBICACION UNA UNICA VEZ
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("NO PERMISO");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const ubicacion = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    try {
      setIsLoading(true);
      const jsonValue = await AsyncStorage.getItem("datos-formulario");
      if (jsonValue != null) {
        const body = JSON.parse(jsonValue);
        body.ubicacion = ubicacion ?? "DESCONOCIDA";
        console.log(body);
        const url = "https://enviocorreos-5ohidu6vqq-uc.a.run.app";
        axios
          .post(url, body)
          .then((response) => {
            console.log("Éxito:", response.data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        // LUEGO REALIZAR UNA LLAMADA AUTOMATICA AL 911
        setTimeout(() => {
          setIsLoading(false);
          router.push("/(tabs)/home");
        }, 5000);
      }
    } catch (e) {
      console.log("Error al leer los datos");
    }
  };

  const fetchUserInformation = async () => {
    const jsonValue = await AsyncStorage.getItem("datos-formulario");

    const value = JSON.parse(jsonValue as string);

    if (!value) {
      Alert.alert('Necesitamos tu información', 'Para poder brindarte auxilio cuando lo necesites, debemos almacenar tu información de contacto de emergencia.', [
        {
          text: 'Aceptar',
          onPress: () => {
            router.push('/(tabs)/form');
          },
        },
      ],
      { cancelable: false },);
    }

    setUser(value);
  };

  useEffect(() => {
    fetchUserInformation();
  }, []);

  // return (
  //   <>
  //     <View style={styles.container}>
  //       <Text>presioname</Text>
  //       <TouchableOpacity style={styles.buttonWrapper} onPress={ActivarAlerta}>
  //         <Text style={styles.buttonLabel}>Presioname mio</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </>
  // );

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={"red"} size={40} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        En caso de emergencia presionar el boton
      </Text>
      <View style={styles.contenedor}>
        <Text style={styles.text}>Nombre: {user?.Nombre}</Text>
        <Text style={styles.text}>Cédula: {user?.Cedula}</Text>
        <Text style={styles.text}>Edad: {user?.Edad}</Text>
        <Text style={styles.text}>Enfermedades: {user?.Enfermedades}</Text>
        <Text style={styles.text}>Alergias: {user?.Alergias}</Text>
        <Text style={styles.text}>Tipo de sangre: {user?.Tipo_sangre}</Text>
        <TouchableOpacity style={styles.buttonWrapper} onPress={ActivarAlerta}>
          <Text style={styles.buttonLabel}>Auxilio!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    textAlign: "center",
    marginBottom: 12,
    fontSize: 16,
    fontWeight: "800",
  },
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },
  centerContainer: {
    width: "100%",
    justifyContent: "center",
  },
  buttonWrapper: {
    height: 30,
    paddingHorizontal: 30,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  contenedor: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#ededed",
    paddingVertical: 20,
    marginBottom: 10,
    borderColor: "transparent",
    justifyContent: "center",
    gap: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  text: {
    fontSize: 17,
    alignSelf: "center",
  },

  text1: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 5,
    color: "red",
    alignSelf: "center",
  },

  imagen: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: "transparent",
    alignSelf: "center",
  },
});
