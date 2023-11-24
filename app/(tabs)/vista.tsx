import {
  View,
  Text,  
  StyleSheet,
  Image
  
    
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Logo from  "../../assets/icons/logo-911.jpg"
import LogoCr from "../../assets/icons/cruzroja.png"
import LogoPn from "../../assets/icons/logopn.jpg"
import LogoB from "../../assets/icons/logobomberos.png"
import LogoDc from "../../assets/icons/logodc.png"
import LogoAa from "../../assets/icons/logoaa.png"
import LogoCoe from "../../assets/icons/logocoe.jpg"
import LogoCdee from "../../assets/icons/logocdee.png"
import LogoOnamet from "../../assets/icons/logonamet.png"
import LogoVial from "../../assets/icons/logovial.png"


const TabFourScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container}> 
      
        
      
      <Text style={styles.title}>Contactos de Emergencia </Text>    

      
      <View  style = {styles.contenedor}>        
          <Image source={Logo} style = {styles.imagen} />                             
          <Text style={styles.text} > Sistema Nacional de Emergencias</Text>
          <Text style={styles.text1} > Marca al 911 </Text>            
      </View>                   


      <View  style = {styles.contenedor}>        
          <Image source={LogoPn} style = {styles.imagen} />
          <Text style={styles.text} > Policia Nacional</Text>
          <Text style={styles.text1} > 809-682-3151 </Text>                    
        </View>


        <View  style = {styles.contenedor}>        
          <Image source={LogoCr} style = {styles.imagen} />                         
          <Text style={styles.text} > Cruz Roja Dominicana</Text>    
          <Text style={styles.text1} > 809-334-4545 </Text>      
        </View>  

     <View  style = {styles.contenedor}>        
          <Image source={LogoDc} style = {styles.imagen} />
          <Text style={styles.text} > Defensa Civil</Text> 
          <Text style={styles.text1} > 809-472-8614 </Text>                               
      </View>    


      <View  style = {styles.contenedor}>        
          <Image source={LogoB} style = {styles.imagen} />
          <Text style={styles.text} > Cuerpo de Bomberos</Text> 
          <Text style={styles.text1} > 809-682-2000 </Text>                                     
        </View>        


      <View  style = {styles.contenedor}>        
          <Image source={LogoVial} style = {styles.imagen} />
          <Text style={styles.text} > Asistencia Vial</Text>
          <Text style={styles.text1} > 899-688-1000 </Text>                                 
      </View>
      

      <View  style = {styles.contenedor}>        
          <Image source={LogoAa} style = {styles.imagen} />
          <Text style={styles.text} > Aero Ambulancia</Text> 
          <Text style={styles.text1} > 809-826-4100 </Text>                                  
      </View>

      
      <View  style = {styles.contenedor}>       
          <Image source={LogoCoe} style = {styles.imagen} />
          <Text style={styles.text} > Centro Operaciones Emergencias</Text>
          <Text style={styles.text1} > 809-472-0909 </Text>                                  
      </View>
    

      <View  style = {styles.contenedor}>        
          <Image source={LogoCdee} style = {styles.imagen} />
          <Text style={styles.text} > Corporación de Empresas Eléctricas  (CDEEE)</Text>
          <Text style={styles.text1} > 809-535-9098 </Text>                               
      </View>


      <View  style = {styles.contenedor}>        
          <Image source={LogoOnamet} style = {styles.imagen} />
          <Text style={styles.text} > Oficina Nacional de Meteorologia (ONAMET)</Text>
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
    height: 130,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',  
    marginBottom: 10,
    borderColor: 'transparent',  
    justifyContent: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    fontWeight:'bold',
    fontStyle:'italic',
    marginTop: 5,
    color: 'red',  
    alignSelf: 'center', 

  }, 

  imagen: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'transparent',
    alignSelf: 'center',
  }
});

export default TabFourScreen;
