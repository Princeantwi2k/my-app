import React,{useState} from 'react';
import { SafeAreaView, View,FlatList,  StyleSheet, Text, StatusBar,Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';




const App = () => {
 


  return (
    <SafeAreaView style={styles.container} >
 <View style={styles.icons}>
   <View style={styles.iconss}>
   <Ionicons name="arrow-back-outline" size={24} color="black" />
   </View>
   <View style={styles.icon}>
   <AntDesign name="shoppingcart" size={24} color="black" />
   </View>
   <View style={styles.iconsss}>
   <AntDesign name="hearto" size={24} color="black" />
   </View>
 </View>
 <View style={styles.img}>
 <Image source={require('./assets/images3.png')} style={styles.Images} />
 </View>
 <View style={styles.topic}>
   <Text style={styles.name}>Winter comfy outfits</Text>
   <View style={styles.review}>
     <Text>Review :</Text>
     <FontAwesome name="star" size={20} color="rgb(194, 158, 15)" />
     <FontAwesome name="star" size={20} color="rgb(194, 158, 15)" />
     <FontAwesome name="star" size={20} color="rgb(194, 158, 15)" />
     <FontAwesome name="star" size={20} color="rgb(194, 158, 15)" />
     <FontAwesome name="star" size={20} color="gray" />

   </View>
   <View style={styles.Viewline}></View>
 </View>
 <View style={styles.context}>
   <Text style={styles.contexts}>it is a long established fact that reaer will be distracted by the readable content of a page.</Text>
 </View>
 <View style={styles.type}>
   <Text style={styles.types}>Material: 91% polyester,9% elastane</Text>
 </View>
 <View style={styles.size}>
<Text style={styles.sizes}>XS</Text>
<Text style={styles.sizes}>S</Text>
<Text style={styles.sizess}>M</Text>
<Text style={styles.sizes}>L</Text>
<Text style={styles.sizes}>XL</Text>
 </View>
<View style={styles.total}>
  <Text style={styles.amount}>Total Amount</Text>
  <Text style={styles.money}>$100</Text>
  <Text style={styles.cart}>Add to Cart</Text>
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
   
    left:50,
    height:200
  

  },
  iconss:{
    position:"absolute",
    left:0,
    backgroundColor:"white",
    padding:10,
    borderRadius:50,
    marginLeft:20

  },
  iconsss:{
    backgroundColor:"white",
    position:"absolute",
    padding:10,
    right:20,
    top:60,
    borderRadius:50,
  },
  img:{
    position:"relative",
    backgroundColor:"white",
    justifyContent:"center",
    marginLeft:40,
    marginRight:70,
    borderRadius:20
  },
  topic:{
    flex:0.2,

  },
  review:{
    flexDirection:"row",
    marginTop:20,
    marginLeft:20
  },
  Viewline:{
    backgroundColor:"blue",
    height:9,
    width:80,
    borderRadius:20,
    marginTop:20,
    marginLeft:20


  },
  name:{
    marginTop:20,
    fontWeight:"500",
    fontSize:24,
    marginLeft:20
  },
  context:{
    flex:0.3,
    justifyContent:"center",
   
    
  },
  contexts:{
    padding:20
  
  },
  type:{
    backgroundColor:"rgba(255,255,255,7.0)",
    padding:10
  },
  types:{
color:"blue",
paddingLeft:20
  },
  size:{
    flex:0.1,
    flexDirection:"row",
    
 justifyContent:"center",
    alignItems:"center"
  },
  sizes:{
    backgroundColor:"white",
    marginLeft: 10,
    padding:20,
    position:"relative",
    marginTop:30,
  borderRadius:10
  },
  sizess:{
    backgroundColor:"#898edd",
    marginLeft: 10,
    padding:20,
    position:"relative",
    marginTop:30,
   borderRadius:10,
  color:"white",
  },
  total:{
    flex:0.2,
    flexDirection:"row",
    position:"relative",
    backgroundColor:"#898edd",
    marginTop:30,
    marginLeft:20,
    marginRight:20,
    borderRadius:20
  },
  amount:{
    position:"absolute",
    top:10,
    color:"white",
    left:10
  },
  money:{
    position:"absolute",
    top:30,
    color:"white",
    left:10,
    fontSize:24
  },
  cart:{
    position:"absolute",
    right:20,
    top:20,
    backgroundColor:"blue",
    padding:15,
    borderRadius:10,
    color:"white"
    

  }



 
 
 
}
);

export default App;