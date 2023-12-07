import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  Alert,
} from "react-native";

const TabFourScreen = () => {
  const [inputValues, setInputValues] = useState({
    Alergias: "",
    Cedula: "",
    Edad: "",
    Enfermedades: "",
    Nombre: "",
    Tipo_sangre: "",
    contacto1: "",
    contacto2: "",
    numeroCasa: "",
  });

  const cargarDatos = async () => {
    try {
      // await AsyncStorage.removeItem('datos-formulario');
      const jsonValue = await AsyncStorage.getItem("datos-formulario");
      if (jsonValue != null) {
        setInputValues(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Error al leer los datos");
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const handleInputChange = (text: string, inputName: string) => {
    setInputValues({ ...inputValues, [inputName]: text });
  };

  const handlePrintValues = async () => {
    // VALIDACIONES

    console.log(inputValues);

    if (validarObjeto(inputValues)) {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      if (
        !regex.test(inputValues.contacto1) ||
        !regex.test(inputValues.contacto2)
      ) {
        Alert.alert(
          "Contactos de emergencia no validos",
          "Debe introducir direcciones de correo electronico",
          [{ text: "ACEPTAR" }]
        );
        return;
      }

      try {
        const jsonValue = JSON.stringify(inputValues);
        await AsyncStorage.setItem("datos-formulario", jsonValue);
        Alert.alert("Exito", "Datos guardados satisfactoriamente.", [
          { text: "ACEPTAR" },
        ]);
      } catch (e) {
        console.log("Error al guardar los datos");
      }
    } else {
      Alert.alert(
        "Debe completar todos los campos",
        "Complete todos los campos para un mejor contacto y gestion a la hora de cualquier emergencia.",
        [{ text: "ACEPTAR" }]
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Formulario de registro</Text>
        <View style={styles.formContainer}>
          <TextInput
            defaultValue={inputValues.Nombre}
            style={styles.input}
            placeholder="Nombre"
            onChangeText={(text) => handleInputChange(text, "Nombre")}
          />
          <TextInput
            defaultValue={inputValues.Edad}
            style={styles.input}
            placeholder="Edad"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text, "Edad")}
          />
          <TextInput
            defaultValue={inputValues.Cedula}
            style={styles.input}
            placeholder="Cedula"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text, "Cedula")}
          />
          <TextInput
            defaultValue={inputValues.Tipo_sangre}
            style={styles.input}
            placeholder="Tipo sangre"
            onChangeText={(text) => handleInputChange(text, "Tipo_sangre")}
          />
          <TextInput
            defaultValue={inputValues.Enfermedades}
            style={styles.input}
            placeholder="Enfermedades que padece"
            onChangeText={(text) => handleInputChange(text, "Enfermedades")}
          />

          <TextInput
            defaultValue={inputValues.Alergias}
            style={styles.input}
            placeholder="Alergias"
            onChangeText={(text) => handleInputChange(text, "Alergias")}
          />
          <TextInput
            defaultValue={inputValues.contacto1}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Primer contacto de emergencia"
            onChangeText={(text) => handleInputChange(text, "contacto1")}
          />
          <TextInput
            defaultValue={inputValues.contacto2}
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Segundo contacto de emergencia"
            onChangeText={(text) => handleInputChange(text, "contacto2")}
          />
          <TextInput
            defaultValue={inputValues.numeroCasa}
            style={styles.input}
            placeholder="Numero de residencia"
            keyboardType="numeric"
            onChangeText={(text) => handleInputChange(text, "numeroCasa")}
          />
          <TouchableHighlight
            style={styles.button}
            underlayColor="#3e8651ff"
            onPress={handlePrintValues}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

function validarObjeto(objeto: Record<string, string>): boolean {
  for (const propiedad in objeto) {
    if (!objeto[propiedad]) {
      return false; // Si una propiedad está vacía o es nula, retorna falso.
    }
  }
  return true; // Si todas las propiedades están llenas, retorna verdadero.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: { marginHorizontal: 40, justifyContent: "center", flex: 1 },
  title: {
    top: 5,
    margin: 10,
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
  },
  input: {
    height: 60,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    marginTop: 10,
    padding: 20,
    backgroundColor: "#56be70",
    borderRadius: 12,
  },
  buttonText: {
    alignSelf: "center",
    fontWeight: "bold",
  },
});

export default TabFourScreen;
