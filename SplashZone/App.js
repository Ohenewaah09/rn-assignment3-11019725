import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerWrap}>
        <Text style={styles.headerText}>Hello , Devs</Text>
        <Text>14 task today</Text>
        </View>
      <Image source={require("./components/person.png")} style={styles.personImage}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    
    
  },
  header:{
    flex: 1,
    backgroundColor: 'purple',
    marginLeft: 20,
    marginTop:52,
    flexDirection: 'row'
   
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 27
  },
  personImage:{
    resizeMode: 'contain',
    width: 46,
    height: 45,
    marginTop:52,
    marginRight:10
    
  }
});
