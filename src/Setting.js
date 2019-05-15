import React from 'react'
import { Text, View,Button,Image,Alert} from 'react-native';

class SettingScreen extends React.Component{
    render(){
      return(<View style = {{flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
      <Text style = {{color : '#e10008', fontSize: 20}}>  Setting Screen</Text>
      </View>)
    }
  }

  export default SettingScreen;