import React from 'react'
import { Text, View,Button,Image,Alert} from 'react-native';

// class DetailScreen extends React.Component{
//   render(){
//     <View style = {{flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
//      <Button 
//      title =  'go back'
//      onPress = { ()  => this.props.navigation.goBack()}
//      />
//       </View>
//   }
// }

class DetailScreen extends React.Component{
    static navigationOptions = ({navigation,navigationOptions}) => {
      return {
        title : navigation.getParam('otherParas','suibian'),//后面的这个参数是在前面的参数为null 时填充的
        headerStyle:{
          backgroundColor : navigationOptions.headerTintColor,
        },
        headerTintColor: {
             navigationOptions: navigationOptions.headerStyle.backgroundColor
        }
      }
    }
    render(){
      const {navigation } = this.props
      const itemId = navigation.getParam('itemId','NO-ID')
      const otherParas = navigation.getParam('otherParas','some default value')
      return(<View style = {{flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
      <Text style = {{color : '#e10008', fontSize: 20}}>  Detail  Screen</Text>
      <Text >itemId : {JSON.stringify(itemId)}</Text>
      <Text>otherParas : {JSON.stringify(otherParas)}</Text>
      {/* <Button onPress ={ () => this.props.navigation.push('Detail',{
        itemId: Math.floor(Math.random() * 100),
      })}/> */}
      <Button 
      title = 'go to Home'
      onPress = {() => this.props.navigation.navigate('Home')}/>
     <Button 
     title =  'go back'
     onPress = { ()  => this.props.navigation.goBack()}
     />
      <Button
      title = 'change nav title'
      onPress = { () => this.props.navigation.setParams({otherParas:'changeTitle!'})}
      />
      </View>)
    }
  }

  export default DetailScreen;


