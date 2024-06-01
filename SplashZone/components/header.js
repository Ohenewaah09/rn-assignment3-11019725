import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Header() {
    return(

        <View style={styles.header}>
           <View style={styles.headerWrap}>
           <Text style={styles.headerText}>Hello, Devs</Text>
            <Text style={styles.subHeaderText}>14 task today</Text>
           </View>   
      <Image source={require("./person.png")} style={styles.personImage}/>

      
    </View>
        
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        marginTop:52,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'100%',
      },
      headerText:{
        fontWeight: 'bold',
        fontSize: 27,
      },
      headerWrap:{
        flexDirection:'column'
      },
      personImage:{
        resizeMode: 'contain',
        width: 46,
        height: 45,
        marginRight:10,
        backgroundColor:'white',
        borderRadius:28
      },
      subHeaderText:{
        fontSize:12
      },
})