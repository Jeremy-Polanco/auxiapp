import { View, Text, TextInput, StyleSheet, TouchableHighlight } from "react-native"

const TabFourScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Formulario de registro</Text>
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
            />
            <TextInput
                style={styles.input}
                placeholder="Cédula"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Tipo de sangre"
            />
            <TextInput
                style={styles.input}
                placeholder="Contacto de emergencia"
                keyboardType="numeric"
            />
            <TouchableHighlight style={styles.button} underlayColor="#3e8651ff" onPress={() => {}}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableHighlight>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: { marginHorizontal: 40, justifyContent: "center", flex: 1  },
    title: {
        top: 80,
        fontWeight: "bold",
        fontSize: 25,
        alignSelf: "center"
    },
    input: {
        height: 60,
        margin: 12,
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