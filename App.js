/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';

import HomeScreen from './src/Home';
import DetailScreen from './src/Detail'

import MineScreen from './src/Mine'
import SettingScreen from './src/Setting'

const AppNavigator =  createStackNavigator(
  {
  Home: {screen: HomeScreen},
  Detail: {screen: DetailScreen}
},
{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight: 'bold',
      // color: '#000',
    }
  },
  navigationOptions:{
    tabBarLabel : 'Home!',
  }
}
)

const PersonNavigaotr = createStackNavigator(
  {
    Mine: {screen : MineScreen},
    Setting:{screen : SettingScreen}
  }
)


const TabNavigator = createBottomTabNavigator(
  {
      Home: {screen: AppNavigator}, 
      Person: {screen: PersonNavigaotr}  
  }
 )

export default createAppContainer(TabNavigator);




