import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const DATA = [
  {
    name: 'Pastel',
    breeds:'Cat',
     years: '2 years old',
   source: require('./assets/cat.jpg'),
   id:2
    
  },
  {
    name: 'Raka',
    breeds:'Dog',
     years: '12 years old',
   source: require('./assets/dog.jpg'),
    id:3
  },
  {
    name: 'Oliver',
    breeds:'cat',
     years: '1 years old',
   source: require('./assets/cat1.jpg'),
    id:4
   },
   {
    name: 'Jack',
    breeds:'Dog',
     years: '11 years old',
   source: require('./assets/dog4.jpg'),
    
   id:5
    
  },
  {
    name: 'Buddy',
    breeds:'Dog',
     years: '11 years old',
   source: require('./assets/dog2.jpg'),
    id:6
  },
  {
    name: 'Charlie',
    breeds:'Cat',
     years: '3 years old',
   source: require('./assets/cat2.jpg'),
    id:7
   },
   {
    name: 'Leo',
    breeds:'Cat',
     years: '4 years old',
   source: require('./assets/cat3.jpg'),
    id:8
   },
   {
    name: 'Rocky',
    breeds:'Dog',
     years: '10 years old',
   source: require('./assets/dog5.jpg'),
   id:9
    
  },
  {
    name: 'Loki',
    breeds:'Cat',
     years: '4 years old',
   source: require('./assets/cat5.jpg'),
    id:10
  },
  {
    name: 'Jhony',
    breeds:'Cat',
     years: '3 years old',
   source: require('./assets/cat4.jpg'),
   id:11
   },
   {
    name: 'Lucy',
    breeds:'Dog',
     years: '3 years old',
   source: require('./assets/dog1.jpg'),
    id:12
   },
   {
    name: 'Toby',
    breeds:'Dog',
     years: '12 years old',
   source: require('./assets/dog3.jpg'),
   id:13
    
  },
  

   
];



const App = () => {




  return (
    <SafeAreaView style={styles.area} >

<View style={styles.edith}>
<FontAwesome name="search" size={24} color="blue" />
<Text style={styles.profiletext}>Search here</Text>
 
  </View>
      <FlatList
        data={DATA}
        renderItem={({item})=>{return(
   
        
        <View style={styles.container}>
          
 
          <Image  source={item.source} style={styles.image}/>
          <View style={styles.Text}>
            <Text style={styles.Texts}>{item.name}</Text>
            <Text style={styles.Textss} >{item.breeds}</Text>
            <Text style={styles.Textss} >{item.years}</Text>
            <View style={styles.View}>
            <EvilIcons name="location" size={24} color="gray" />
            <Text style={{color:"gray"}}>93 Shoreline Dr,..</Text>
            </View>
          
          </View>
        
        </View>
        
        )}}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop: StatusBar.currentHeight || 0,
    marginBottom:20,
   
  },
  area:{
backgroundColor:"rgb(193, 191, 191)"
  },
  edith:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:20,
    padding:15,
   flexDirection:"row",
   backgroundColor:"white",
   borderRadius:10
   
   
   
   },
   
   profiletext:{

   paddingTop:5,
   paddingLeft:10,
   
   
   },
   View:{
     flexDirection:"row",
     paddingTop:5
   },
   Textss:{
   paddingLeft:10,
   paddingTop:5,
   color:"gray"
   },
   
   iconss:{
   
   fontSize:20,
   justifyContent:"flex-start",
   flex: 0.35,
   
   },
  image:{
    flex:0.5,
    height:200,
    width:200,
    borderRadius:20,
    marginLeft:20,
  },
  Text:{
    marginTop:20,
    marginBottom:20,
    flex:0.4,
    backgroundColor:"white",
    borderTopEndRadius:20,
    borderBottomRightRadius:20

   
   
  },
  Texts:{
    marginTop:30,
    justifyContent:"flex-start",
    fontSize:20,
    fontWeight:"500",
    paddingLeft:10,
    color:"blue"
  },

 
});

export default App;