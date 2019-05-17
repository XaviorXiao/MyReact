/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  StatusBar,
  Button,
} from 'react-native'

import {
 createStackNavigator,
 createAppContainer,
 createSwitchNavigator,
}from 'react-navigation'

import MainScreen from './src/Main'
import SignInScreen from './src/LoginPage/SignIn'

class AuthLoadingScreen extends React.Component {
  constructor(props){
    super(props);
    this._bootstrpsAsyns();

  }

  _bootstrpsAsyns = async() =>{
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }
  render (){
    return(<View>
      <ActivityIndicator/>
     <StatusBar barStyle = 'default'/>
    </View>)
  }
}


const LoginStack = createStackNavigator({
   Login: {screen : SignInScreen},
})


export default createAppContainer(createSwitchNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    App: MainScreen,
    Auth: LoginStack
},
{
  initialRouteName: 'AuthLoading',
}
))



