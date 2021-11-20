import React,{useState} from 'react';
import { SafeAreaView, View,FlatList,  StyleSheet, Text, StatusBar,Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';




const App = () => {
  const DATA = [
    {
      name: 'Winter comfy outfits',
 
       amount:'$99',
     source: require('./assets/images3.png'),
     id:2
      
    },
    {
      name: 'Winter coats 2020',
      amount:'$88',
     source: require('./assets/images4.png'),
      id:3
    },
    {
      name: 'White Women Jacket',
      amount:'$100',
     source: require('./assets/images2.png'),
      id:4
     },
     {
      name: 'Shop Ladies Jacket 31',
      amount:'$140',
     source: require('./assets/images1.png'),
      
     id:5
      
    },
  

    ]


  return (
    <SafeAreaView style={styles.container} >
 <View style={styles.icons}>
   <View style={styles.iconss}>
   <Ionicons name="arrow-back-outline" size={24} color="black" />
   </View>
   <View style={styles.icon}>
   <AntDesign name="shoppingcart" size={24} color="black" />
   </View>
 </View>
 <View style={styles.topic}>
  <Text style={styles.Text}>Women Jacket</Text>
 </View>
  <View style={styles.search}>
   <Text style={styles.Text1}>Search Jacket</Text>
   <Text style={styles.Text2}>Fliter</Text>
  </View>
  <View style={styles.list}>
  <FlatList
        data={DATA}
        renderItem={({item})=>{return(
   
        
        <View style={styles.life}>
          
          <View style={styles.Images}>
          <Image  source={item.source} style={styles.image}/>
          </View>
          <View style={styles.text}>
            <Text style={styles.Texts}>{item.name}</Text>

    
            <View style={styles.View}>
           
            <FontAwesome name="star" size={24} color="rgb(194, 158, 15)" />
            <FontAwesome name="star" size={24} color="rgb(194, 158, 15)" />
            <FontAwesome name="star" size={24} color="rgb(194, 158, 15)" />
            <FontAwesome name="star" size={24} color="rgb(194, 158, 15)" />
            </View>
                      <Text style={styles.Textss} >{item.amount}</Text>
          </View>
        
        </View>
        
        )}}
        keyExtractor={item => item.id}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"rgb(193, 191, 191)",
    marginTop: StatusBar.currentHeight || 0,  
   
  },
  icons:{
    flex:0.1,
    flexDirection:"row",
    position:"relative",
    
  },
  icon:{
    position:"absolute",
    backgroundColor:"white",
    padding:10,
right:0,
borderRadius:50,
marginRight:20

  },
  image:{
  
    height:100,
    width:100,
    bottom:30
    
    
  },
  Images:{
    position:"relative",
    backgroundColor:"white",
    padding:10,
    borderTopEndRadius:50,
    borderTopLeftRadius:50,
    borderBottomLeftRadius:70,
    borderBottomRightRadius:20

  },
  iconss:{
    position:"absolute",
    left:0,
    backgroundColor:"white",
    padding:10,
    borderRadius:50,
    marginLeft:20

  },
  topic:{
    flex:0.1
  },
  Text:{
    fontSize:30,
    marginLeft:20
  },
  search:{
    flex:0.1,
    backgroundColor:"white",
    marginLeft:20,
    marginRight:20,
    borderRadius:30,
    position:"relative"
  },
  Text1:{
    position:"absolute",
    top:25,
    left:20,
    color:"rgb(193, 191, 191)"
    
  },
  Text2:{
    position:"absolute",
    right:20,
    top:25,
    fontSize:20,
    color:"blue"
  },
  life:{
    flexDirection:"row",
    marginTop:40,
    marginLeft:20
  },
  list:{
  flex:0.7
  },
  Textss:{
    color:"blue"
  },
  text :{
    justifyContent:"center",
    marginLeft:20
  },
  View:{
    flex:0.1,
    flexDirection:"row"
  }

 
 
 
}
);

export default App;