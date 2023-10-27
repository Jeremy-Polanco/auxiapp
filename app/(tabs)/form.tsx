import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableHighlight,ScrollView,Alert } from "react-native"

const TabFourScreen = () => {

    const [inputValues, setInputValues] = useState({ 
        Alergias: '',
        Cedula: '',
        Edad: '',
        Enfermedades: '',
        Nombre: '',
        Tipo_sangre: '',
        contacto1: '',
        contacto2: '',
        numeroCasa: '',
});

   const handleInputChange = (text: string, inputName: string) => {
      setInputValues({ ...inputValues, [inputName]: text });
    };
  
    const handlePrintValues = () => {

        // VALIDACIONES
        if (validarObjeto(inputValues)) {
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
             if (!regex.test(inputValues.contacto1) || !regex.test(inputValues.contacto2)) {
                Alert.alert('Contactos de emergencia no validos', 'Debe introducir direcciones de correo electronico', [
                    {text: 'ACEPTAR'},
                  ]);
                  return;
          }
          
          //logica para persistir datos aqui
          console.log('Todo correcto.');

          } else {
            Alert.alert('Debe completar todos los campos', 'Complete todos los campos para un mejor contacto y gestion a la hora de cualquier emergencia.', [
                {text: 'ACEPTAR', },
              ]);
          }
        
    };

    
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.title}>Formulario de registro</Text>
        <View style={styles.formContainer} >
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={(text) => handleInputChange(text, 'Nombre')}
            />
             <TextInput
                style={styles.input}
                placeholder="Edad"
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(text, 'Edad')}
            />
            <TextInput
                style={styles.input}
                placeholder="Cedula"
                keyboardType="numeric" onChangeText={(text) => handleInputChange(text, 'Cedula')}
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo sangre" onChangeText={(text) => handleInputChange(text, 'Tipo_sangre')}
            />
              <TextInput
                style={styles.input}
                placeholder="Enfermedades que padece" onChangeText={(text) => handleInputChange(text, 'Enfermedades')}
            />
        
              <TextInput
                style={styles.input}
                placeholder="Alergias" onChangeText={(text) => handleInputChange(text, 'Alergias')}
            />
            <TextInput
                style={styles.input}
                autoCapitalize="none"
        keyboardType="email-address"
                placeholder="Primer contacto de emergencia" onChangeText={(text) => handleInputChange(text, 'contacto1')}
                
            />
               <TextInput
                style={styles.input}
                autoCapitalize="none"
        keyboardType="email-address"
                placeholder="Segundo contacto de emergencia" onChangeText={(text) => handleInputChange(text, 'contacto2')}
                
            />
             <TextInput
                style={styles.input}
                placeholder="Numero de residencia" 
                keyboardType="numeric" onChangeText={(text) => handleInputChange(text, 'numeroCasa')}
            />
            <TouchableHighlight style={styles.button} underlayColor="#3e8651ff" onPress={handlePrintValues}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableHighlight>
        </View>
    </View>
    </ScrollView>
  )
}

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
    formContainer: { marginHorizontal: 40, justifyContent: "center", flex: 1  },
    title: {
        top: 5,
        margin:10,
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center"
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
        fontWeight: "bold"
    }
})

export default TabFourScreen