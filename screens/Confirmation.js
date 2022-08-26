import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';


export default class Confirmation extends React.Component {
constructor(props){
  super(props)
}

displayAlert=()=>{
alert("complete the task")
}

gotofinalscreen=()=>{
    this.props.novigation.navigate('FinalScreen')
}

render(){

return(
<View>
    
<AppHeader/>

<Text style={styles.confirmationtext}>Have you completed the task?</Text>

<TouchableOpacity onPress={()=>{this.props.navigation.navigate('FinalScreen')}}>
    <Text style={styles.options} >yes</Text>
</TouchableOpacity>

<TouchableOpacity onPress={this.displayAlert}>
    <Text style={styles.options} >no</Text>
</TouchableOpacity>

</View>

)


}
}

const styles= StyleSheet.create({
  confirmationtext:{
    margin:20,
    backgroundColor:"black",
    fontSize:25,
    paddingTop:5,
    paddingLeft:30,
    color:"#FF7A1F",
    alignText:'center',
    borderRadius: 30
  },
  options:{
    height: 60,
    width:150,
    marginTop:30,
    marginLeft:90,
    backgroundColor:"#FF7A1F",
    fontSize:25,
    paddingTop:10,
    paddingLeft:60,
    alignText:'center',
    borderRadius: 30
  }

  
})