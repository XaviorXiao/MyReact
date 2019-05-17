import {createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation';

import HomeScreen from './Home';
import DetailScreen from './Detail'

import MineScreen from './Mine'
import SettingScreen from './Setting'

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

export default TabNavigator;