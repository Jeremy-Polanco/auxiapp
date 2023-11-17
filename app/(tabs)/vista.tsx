import {
  View,
  Text,  
  StyleSheet,
  
    
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


const TabFourScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}>      
      
      <Text style={styles.title}>Contactos de Emergencia </Text>    

      <View style = {styles.contenedor}>
        <Text style={styles.text} > Sistema Nacional de Emergencias</Text>
        <Text style={styles.text1} > 911</Text>    
      </View>        
                   
      <View style = {styles.contenedor}>
        <Text style={styles.text} > Cruz Roja Dominicana</Text> 
        <Text style={styles.text1} > 809-334-4545 </Text>        
      </View>

      <View style = {styles.contenedor}>
        <Text style={styles.text} > Policia Nacional</Text>
        <Text style={styles.text1} > 809-682-3151 </Text>        
      </View>

      <View  style = {styles.contenedor}>
        <Text style={styles.text} > Cuerpo de Bomberos</Text>
        <Text style={styles.text1} > 809-682-2000 </Text>        
      </View>

      <View  style = {styles.contenedor}>
        <Text style={styles.text} > Defensa Civil</Text>
        <Text style={styles.text1} > 809-472-8614 </Text>       
      </View>

      <View  style = {styles.contenedor}>
        <Text style={styles.text} > Aero Ambulancia </Text>      
        <Text style={styles.text1} > 809-826-4100 </Text>        
      </View>

      <View  style = {styles.contenedor}>
        <Text style={styles.text} > Centro Operaciones Emergencias (COE)</Text>
        <Text style={styles.text1} > 809-472-0909 </Text>
      </View>   


      <View  style = {styles.contenedor}>
        <Text style={styles.text} > Corporación de Empresas Eléctricas  (CDEEE) </Text>      
        <Text style={styles.text1} > 809-535-9098 </Text>
      </View>  


      <View  style = {styles.contenedor}>
        <Text style={styles.text} > Oficina Nacional de Meteorologia (ONAMET) </Text>      
        <Text style={styles.text1} > 809-788-1122 </Text>
      </View>                      
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    flex: 1,    
   
  },

  contenedor: {
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',  
    marginBottom: 10,  
    
  },
  
  title: {
    
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  text: {
    fontSize: 15,     
    marginTop: 15,

  },

  text1: {
    fontSize: 20,
    fontWeight:'bold',
    fontStyle:'italic',
    marginTop: 5,
    color: 'red',
    

  }, 
});

export default TabFourScreen;
