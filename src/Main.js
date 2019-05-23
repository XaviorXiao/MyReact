import React from 'react'
import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons'
import {
   Platform,
   Image,
}from 'react-native'

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
}
)

const PersonNavigaotr = createStackNavigator(
  {
    Mine: {screen : MineScreen},
    Setting:{screen : SettingScreen}
  }
)

const mainTab = createBottomTabNavigator({
  Page1: {
      screen: AppNavigator,
      navigationOptions: {
          tabBarLabel: 'Page1',
          tabBarIcon: ({tintColor, focused}) => (
              <Ionicons
                  name={focused ? 'ios-home' : 'ios-home-outline'}
                  size={26}
                  style={{color: tintColor}}
              />
          ),
      }
  },
  Page2: {
      screen: PersonNavigaotr,
      navigationOptions: {
          tabBarLabel: 'Page2',
          tabBarIcon: ({tintColor, focused}) => (
              // <Ionicons
              //     name={focused ? 'ios-people' : 'ios-people-outline'}
              //     size={26}
              //     style={{color: tintColor}}
              // />
              <Image style = {{width:26,height: 16,tintColor:tintColor}} source={ require('../images/ic_me.png')}/>
          ),
      }
  },
  Page3: {
      screen: PersonNavigaotr,
      navigationOptions: {
          tabBarLabel: 'Page3',
          tabBarIcon: ({tintColor, focused}) => (
              <Ionicons
                  name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
                  size={26}
                  style={{color: tintColor}}
              />
          ),
      }
  },
}, {
  // tabBarComponent: TabBarComponent,
  tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      //     animationEnabled:true,//切换页面时是否有动画效果
//     tabBarPosition:"bottom", //tabbar的位置
//     swipeEnabled:false,//是否可以左右滑动切换tab
//     backBehavior:'none',//按back键是否跳转到第一个tabbar（首页），none 为不跳转
//     tabBarOptions:{
//       activeTintColor: '#ff8500',//文字和图片的选中颜色
//       inactiveTintColor:'#999',//文字和图片的未选中颜色
//       showIcon:true,//默认为false 需要设置true才能显示
//       indicatorStyle:{
//         height: 0, //如tabbar下面有一条线，可以设置高度为0 隐藏
//       },
//       style:{
//         backgroundColor: '#fff',//tabbar 背景颜色
//         height: 49,
//       },
//       labelStyle:{
//         fontSize: 12,// 文字大小
//       }
//     }
  }
});

export default mainTab;