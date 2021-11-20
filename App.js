import React,{useState} from 'react';
import { SafeAreaView, View,FlatList,  StyleSheet, Text, StatusBar,Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Navigation from './assets/Route/Homestack'




const App = () => {
 


  return (
    <SafeAreaView style={styles.container} >
    <Navigation />
 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(193, 191, 191)",
    marginTop: StatusBar.currentHeight || 0,  
   
  },
  
 
}
);

export default App;