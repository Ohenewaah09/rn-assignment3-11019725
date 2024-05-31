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

      <View style={styles.categorySection}>
        <Text style={styles.TextSection}>Categories</Text>
      </View>

      <View style={styles.twoImg}>
        <View style={styles.Img1Container}>
        <Text style={styles.exercise1}>Exercise</Text>
        <Text style={styles.task1}>12 Tasks</Text>
      <Image source={require("./components/girlcrossleg.png")} style={styles.Image}/>
        </View>
        
        <View style={styles.Img2Container}>
        <Text style={styles.exercise1}>Study</Text>
        <Text style={styles.task1}>12 Tasks</Text>
        <Image source={require("./components/manOnComp.png")} style={styles.Image}/>
        </View>
      </View>

      <View style={styles.contexts}>
        <Text>Ongoing Tasks </Text>
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
   },
   TextSection:{
    marginTop:28,
    marginLeft:20,
    fontSize:20,
    fontWeight:'700',
    lineHeight:24,
   },
   Image:{
    height:131,
    width:151,
    resizeMode: 'contain',
   },
   Img1Container:{
    backgroundColor:'white',
    marginLeft:18,
    marginTop:10,
    borderRadius:10,
    padding:8,
   },
   Img2Container:{
    backgroundColor:'white',
    marginLeft:20,
    marginTop:10,
    borderRadius:10,
    padding:8,
   },
   exercise1:{
    marginLeft:36,
    marginTop:10
   },
   task1:{
    marginLeft:36,
   },
   twoImg:{
    flexDirection:'row'
   }
});
