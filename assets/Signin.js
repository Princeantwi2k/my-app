import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.selector}>
        <View style={styles.Headers}>
        <Text style={styles.Headerstext}>Sign up</Text>
        </View>
    <View  style={styles.input}>
      <TextInput type="text" placeholder="Username" style={styles.inputs} />
      <TextInput type="text" placeholder="Email" style={styles.inputs} />
       <TextInput type="text" placeholder="Password" style={styles.inputs} />
      <TextInput type="text" placeholder="Password again" style={styles.inputs} />
    
    </View>
    <View style={styles.sub}>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.touchText}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.touchTexts}>You already have account? Log in</Text>
    </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selector:{
    padding:60,
   backgroundColor:"white",
   borderWidth:0.2,
   
   elevation:0.2,
   borderRadius:20,

  },
  Headers:{
    flex : 0.2,
    
  },
  Headerstext:{
    fontSize:40,
    color:"#5F2585"

  },
  input:{
    flex : 0.4,
    width:200
  },
  inputs:{
   borderBottomWidth:2,
   borderBottomColor:"#5F2585",
   marginBottom:30,
   padding:3
   
   


  },
  sub :{
    flex:0.2,
   
  },
  touch:{
    marginTop:40,
    backgroundColor:"#5F2585",
    padding:10,
    borderRadius:20
 
  },
  touchText:{
    color:"white",
    textAlign:'center',
    fontSize:20
    
  },
  touchTexts:{
    marginTop:40
  }


});
