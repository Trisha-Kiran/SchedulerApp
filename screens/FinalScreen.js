import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class FinalScreen extends React.Component {    
  constructor(props){
  super(props)
}

    render(){
return(
<View>
<TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
<Text styles={styles.finaltext} > Congratulations! Your task has been completed!     click here to return.</Text>
</TouchableOpacity>
</View>

)


}
}
const styles= StyleSheet.create({
    finaltext:{
    margin:20,
    backgroundColor:"black",
    fontSize:25,
    paddingTop:5,
    paddingLeft:30,
    color:"#FF7A1F",
    alignText:'center',
    borderRadius: 30
  }
})