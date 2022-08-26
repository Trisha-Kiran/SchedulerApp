import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Confirmation from './screens/Confirmation';
import FinalScreen from './screens/FinalScreen';

const Stack=createStackNavigator();

export default class App extends React.Component {
render(){

return(
<NavigationContainer>
<Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown:false}}>
<Stack.Screen name="HomeScreen" component={HomeScreen}/>
<Stack.Screen name="Confirmation" component={Confirmation}/>
<Stack.Screen name="FinalScreen" component={FinalScreen}/>

</Stack.Navigator>
</NavigationContainer>


)}
}