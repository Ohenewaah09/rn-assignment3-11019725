import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View, ScrollView, FlatList} from 'react-native';
import Header from './components/header';



export default function App() {
  const [tasks, setTasks] = useState([
    {name: 'Mobile App Development', id: '1'},
    {name: 'Web Development', id: '2'},
    {name: 'Push ups', id: '3'},
    {name: 'Exercises', id: '4'},
    {name: 'Study', id: '5'},
    {name: 'Statistics', id: '6'},
    {name: 'Calculus', id: '7'},
    {name: 'Programming', id: '8'},
    {name: 'Code', id: '9'},
    {name: 'Algorithm', id: '10'},
    {name: 'Design', id: '11'},
    {name: 'Systems', id: '12'},
    {name: 'Meditation', id: '13'},
    {name: 'Workout', id: '14'},
    {name: 'Cook', id: '15'},
    {name: 'Networking', id: '16'},
    
  ]);


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

      <ScrollView>
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

      <View style={styles.twoImg}>
        <View style={styles.Img1Container}>
        <Text style={styles.exercise1}>Code</Text>
        <Text style={styles.task1}>12 Tasks</Text>
      <Image source={require("./components/code.webp")} style={styles.Image}/>
        </View>
        
        <View style={styles.Img2Container}>
        <Text style={styles.exercise1}>Systems</Text>
        <Text style={styles.task1}>12 Tasks</Text>
        <Image source={require("./components/computer.png")} style={styles.Image}/>
        </View>
      </View>

      <View style={styles.twoImg}>
        <View style={styles.Img1Container}>
        <Text style={styles.exercise1}>Meditation</Text>
        <Text style={styles.task1}>12 Tasks</Text>
      <Image source={require("./components/relaxation.png")} style={styles.Image}/>
        </View>
        
        <View style={styles.Img2Container}>
        <Text style={styles.exercise1}>Workout</Text>
        <Text style={styles.task1}>12 Tasks</Text>
        <Image source={require("./components/workout.png")} style={styles.Image}/>
        </View>
      </View>

      <View style={styles.twoImg}>
        <View style={styles.Img1Container}>
        <Text style={styles.exercise1}>Cook</Text>
        <Text style={styles.task1}>12 Tasks</Text>
      <Image source={require("./components/cook.jpeg")} style={styles.Image}/>
        </View>
        
        <View style={styles.Img2Container}>
        <Text style={styles.exercise1}>Networking</Text>
        <Text style={styles.task1}>12 Tasks</Text>
        <Image source={require("./components/networking.jpeg")} style={styles.Image}/>
        </View>
      </View>

      
      </ScrollView> 
      <FlatList
    
      keyExtractor={( item ) => item.id}
        data={tasks}
        ListHeaderComponent={() =>(
        <View style={styles.contexts}>
        <Text style={styles.ongoingTask}>Ongoing Task </Text>
      </View>
        )}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      
      
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
    marginLeft:16,
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
    marginTop:10,
    fontWeight:'500',
    fontSize:16
   },
   task1:{
    marginLeft:36,
    fontSize:12
   },
   twoImg:{
    flexDirection:'row',
   },
   contexts:{
    marginTop:40,
    marginLeft:20,
   },

   ongoingTask:{
    fontSize:18,
    fontWeight:'700'
   },
   item:{
    marginTop: 24,
    marginRight:20,
    padding:20,
    backgroundColor:'white',
    fontSize:16,
    fontWeight:'500',
    marginHorizontal:10,
    width:350,
    height:154,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#E8D1BA',
    alignItems:'center'
   },
});