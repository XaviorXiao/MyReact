import React from 'react'
import { Text, View,Button,Image,Alert,AsyncStorage} from 'react-native';

// class  LogoTitle extends React.Component{
//     render(){
//       return <Image
//       source = {require('../images/cardcoupons.png')}
//       style = {{width : 30 , height: 30}}/>
//     }
//  }

// class HomeScreen extends React.Component{
//   render(){
//     <View style = {{ flex : 1, justifyContent : 'center' , alignItems: 'center'}}>
//      <Text> HomeScreen </Text>
//      <Button onPress = {() => this.props.navigation.navigate('Detail')}
//      title = 'Go to Detail'/>
//      </View>
//   }
// }
 
 class HomeScreen extends React.Component{
   static navigationOptions = ({navigation}) => { 
     return{
      title: '首页',//这个属性可以支持自定义组件
      headerRight: (
        <Button onPress = {navigation.getParam('inCreaseCount')}
        title = 'info'
        color = '#ffffff'/>
      ),
     }
   };

   componentDidMount(){
    this.props.navigation.setParams({inCreaseCount : this._inCreaseCount})
  }
  state = {
    count : 0,
  }
  _inCreaseCount = () => {
    this.setState({count : this.state.count + 1})
    Alert.alert(this.state.count)
  }

  //登出操作
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth')
  }

   render(){
     console.log('this is home page')
     return(<View style = {{ flex : 1, justifyContent : 'center' , alignItems: 'center'}}>
     <Text> HomeScreen </Text>
     <Button onPress = {() => this.props.navigation.navigate('Detail',{
       itemId: 86,
       otherParas: 'add other params you want'
     })}
     title = 'Go to Detail'/>
     <Button onPress = {this._signOutAsync}
     title = '退出登录'/>
     </View>)
   }

 
  
 }

 export default HomeScreen;