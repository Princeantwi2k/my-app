import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import IconAntDesign from 'react-native-vector-icons/AntDesign'

const DATA = [
  {
    name: 'Prince Antwi',
     number: '057-221-1378',
   source: require('./assets/img5.jpg'),
   id:2
    
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img4.jpg'),
    id:3
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img2.jpg'),
    id:4
   },
   {
    name: 'Prince Antwi',
     number: '057-221-1378',
   source: require('./assets/img1.jpg'),
   id:5
    
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img3.jpg'),
    id:6
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img.jpg'),
    id:7
   },
   {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/pic9.jpg'),
    id:8
   },
   {
    name: 'Prince Antwi',
     number: '057-221-1378',
   source: require('./assets/pic8.jpg'),
   id:9
    
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/pic7.jpg'),
    id:10
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/pic6.jpg'),
    id:11
   },
   {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img6.jpg'),
    id:12
   },
   {
    name: 'Prince Antwi',
     number: '057-221-1378',
   source: require('./assets/img8.jpg'),
   id:13
    
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img7.jpg'),
    id:14
  },
  {
    name: 'Prince Antwi',
    number: '057-221-1378',
    source: require('./assets/img9.jpg'),
    id:15
   },
   
];



const App = () => {




  return (
    <SafeAreaView >

<View style={styles.edith}>
    <IconAntDesign name="arrowleft"  style={styles.iconss} />
    <Text style={styles.profiletext}> Contact </Text>
  </View>
      <FlatList
        data={DATA}
        renderItem={({item})=>{return(
   
        
        <View style={styles.container}>
          
 
          <Image  source={item.source} style={styles.image}/>
          <View style={styles.Text}>
            <Text style={styles.Texts}>{item.name}</Text>
            <Text style={styles.Texts}>{item.number}</Text>
          </View>
          <View style={styles.icon}>
          <Feather name="phone" size={24} color="black" style={styles.icons} />
          <MaterialCommunityIcons name="message-processing" size={24} color="black" style={styles.icons} />
          <Ionicons name="md-ellipsis-vertical-sharp" size={24} color="gray" style={{paddingLeft:8}} />
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
    marginBottom:10
  },
  edith:{
    marginTop:10,
    marginBottom:9,
    padding:20,
   flexDirection:"row",
   borderBottomWidth:2,
   borderBottomColor:"gray"
   
   },
   
   profiletext:{
   fontSize:30,
   
   flex: 6,
   textAlign: "center",
   
   },
   
   iconss:{
   
   fontSize:20,
   justifyContent:"flex-start",
   flex: 0.35,
   
   },
  image:{
    flex:0.3,
    height:70,
    width:70,
    borderRadius:50
  },
  Text:{
    flex:0.6,

   
   
  },
  Texts:{
    textAlign:'center',
    justifyContent:'center',
    fontSize:20
  },
  icon:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  icons:{
    color:'aqua',
    paddingLeft:8
  }
 
});

export default App;