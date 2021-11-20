import React,{useState} from 'react';
import { SafeAreaView, View,  StyleSheet, Text, StatusBar,Image, TouchableOpacity } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';




const Online = () => {




  return (
    <SafeAreaView style={styles.container} >

<View style={styles.edith}>

<Text style={styles.profiletext}>ONLINE SHOPPING</Text>

  </View>
  <View style={styles.list}>
<Text> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas imperdiet lacinia ligula, vel aliquet lacus convallis non. Maecenas fringilla orci tellus, vitae facilisis diam dictum vel. Etiam gravida eros eget arcu pharetra, eu mollis lacus sagittis. Nullam nunc arcu, elementum et nibh nec, suscipit commodo justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum egestas lorem et purus tincidunt, eu fermentum ex pharetra. Quisque sit amet nisl ligula. Nulla placerat nibh nec nisi porttitor, eu commodo felis lacinia. Phasellus sit amet gravida nibh, vel tristique orci. Nullam nec ante ex. Ut maximus vel quam quis tincidunt. Suspendisse euismod dolor non ex auctor, eget lobortis justo feugiat. Mauris vestibulum, quam condimentum convallis hendrerit, ligula enim tempus massa, non pulvinar elit leo nec leo.  </Text>
  </View>
  <View style={styles.Image}>
 <Image source={require("./assets/ov.png") }  style={{height:300, width:300,marginLeft:40}}/>
  </View>
  <View style={styles.sub}>
  <TouchableOpacity style={styles.touch}>
        <Text style={styles.touchText}>Next</Text>
      </TouchableOpacity>
  </View>
    
          <View style={styles.View}>
            <View style={styles.Views}></View>
            <View style={styles.Viewsss}></View>
            <View style={styles.Viewss}></View>
          
            <Text style={styles.prev}>previous</Text>
          </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    marginTop: StatusBar.currentHeight || 0,  
   
  },
  edith:{
   
    flex:0.1
  },
 
  profiletext: {
    
   paddingLeft:20,
   fontSize:30,
   paddingTop:30,
   paddingLeft:10
  
   
   
  },
  list:{
 flex:0.2,
 paddingLeft:10
  },
  Image:{
    flex:0.4,
    
  },
  sub :{
    flex:0.2,
   
  },
  touch:{
    marginTop:40,
    backgroundColor:"#5F2585",
    padding:15,
    borderRadius:40,
    marginRight:70,
    marginLeft:70

 
  },
  touchText:{
    color:"white",
    textAlign:'center',
    fontSize:30
    
  },
  View:{
    flex:0.1,
    position:"relative",
    flexDirection:"row"
  },
  Views:{
    position:"absolute",
    height:10,
    marginRight:6,
    right:210,
    width:10,
    backgroundColor:"gray",
    borderRadius:50
  },
  Viewsss:{
    position:"absolute",
    height:10,
    marginRight:10,
    right:220,
    width:10,
    backgroundColor:"gray",
    borderRadius:50
  },
  Viewss:{
    position:"absolute",
    height:10,
    paddingLeft:20,
    right:190,
    width:10,
    backgroundColor:"#5F2585",
    borderRadius:50
  },
  skip: {
    position:"absolute",
    right:0,
    fontSize:20,
    color:"grey"
  },
  prev: {
    position:"absolute",
  
    fontSize:20,
    color:"grey"
  },
 
 
}
);

export default Online;