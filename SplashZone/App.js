import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/header';



export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.SearchAndSlider}>
      <View style={styles.searchContainer}>
      <Image source={require("./components/image.png")} style={styles.searchImage}/>
        <TextInput style={styles.TextInput} placeholder='Search' placeholderTextColor='black'/>
    </View>
    
    <Image source={require("./components/bxSlider.png")} style={styles.Slider}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5F5F5',
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
  },
  SearchAndSlider:{
    flexDirection:'row',
    alignItems:'center',
    width:'80%',
  },
  searchContainer:{
    backgroundColor:'white' ,
    flexDirection:'row',
    width: 260,
    height: 48,
    marginTop: 40,
    marginLeft: 20,
    padding:5,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 14,
    border:1,
   
   },
   searchImage:{
    height:19,
    width:30,
    resizeMode: 'contain',
    marginRight:10
   },

   TextInput:{
    flex:1
   },
   Slider:{
    height:40,
    width:42,
    backgroundColor:'#F0522F',
    borderRadius:6,
    marginLeft:25,
    marginTop: 40,
   }
});
