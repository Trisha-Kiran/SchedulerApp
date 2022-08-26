import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import {Audio} from 'expo-av';


export default class HomeScreen extends React.Component {
constructor(props){
  super(props)
}
gotoconfirmation=()=>{
this.props.navigation.navigate('Confirmation')
}

    
    render(){

return(
<View>
<AppHeader/>
<TouchableOpacity style={styles.scheduleContainer} onPress={()=>this.props.navigation.navigate('Confirmation')
}>
    <Text style={styles.scheduleText}>schedule1</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.scheduleContainer} onPress={()=>this.props.navigation.navigate('Confirmation')}> 
    <Text style={styles.scheduleText}>schedule2</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.scheduleContainer} onPress={()=>this.props.navigation.navigate('Confirmation')}>
    <Text style={styles.scheduleText}>schedule3</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.scheduleContainer} onPress={()=>this.props.navigation.navigate('Confirmation')}>
    <Text style={styles.scheduleText}>schedule4</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.ionicon} >
<Ionicons name={"add-circle"} size={RFValue(30)} color={"#FF7A1F"} />
</TouchableOpacity>
</View>
)


}
}

const styles= StyleSheet.create({
  scheduleContainer:{
    marginTop:30,
    marginLeft:90,
    backgroundColor:"black",
    height: 60,
    width:150,
    borderRadius:10
  },
  scheduleText:{
    fontSize:30,
    paddingTop:5,
    paddingLeft:10,
    color:"#FF7A1F",
    alignText:'center'
  },
  ionicon: {
    marginLeft:125,
    marginTop:25,
    width: RFValue(100),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: RFValue(30)
  }
})