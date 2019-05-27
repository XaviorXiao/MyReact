import React from 'react'
import { Text, View,Button,Image,Alert} from 'react-native';


import ImageComponent from './component/HeaderImage'
import Test1Component from './component/test1'
import Test2Component from './component/test2'


const imageurl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=760528960,2729756840&fm=26&gp=0.jpg'

class DetailScreen extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      param: 'i am come back'
    }
    this._navGoback = this._navGoback.bind(this);
    this._showImageNow= this._showImageNow.bind(this);
  }
    static navigationOptions = ({navigation,navigationOptions}) => {
      return {
        title : navigation.getParam('otherParas','suibian'),//后面的这个参数是在前面的参数为null 时填充的
        headerStyle:{
          backgroundColor : navigationOptions.headerTintColor,
        },
        headerTintColor: {
             navigationOptions: navigationOptions.headerStyle.backgroundColor
        },
        // header:null,
        // tabBarVisible:false,
      }
    }

    _navGoback (){
         const {navigate,goBack,state} = this.props.navigation;
         let backParams = this.state.param
         state.params.callback(backParams);
         this.props.navigation.goBack();    
    }

    _showImageNow(){
      this.refs.imageShow._refreshImage(imageurl)
    }

    render(){
      const {navigation } = this.props
      const itemId = navigation.getParam('itemId','NO-ID')
      const otherParas = navigation.getParam('otherParas','some default value')
      return(<View style = {{flex: 1, alignItems: 'center' , justifyContent: 'center'}}>
      <Text style = {{color : '#e10008', fontSize: 20}}>  Detail  Screen</Text>
      <Text >itemId : {JSON.stringify(itemId)}</Text>
      <Text>otherParas : {JSON.stringify(otherParas)}</Text>
      <ImageComponent ref= 'imageShow' style = {{height: 100}}/>
      <Button 
      title = 'show image'
      onPress = {this._showImageNow}/>
     <Button 
     title =  'go back'
     onPress = {this._navGoback}
     />
      <Button
      title = 'change nav title'
      onPress = { () => this.props.navigation.setParams({otherParas:'changeTitle!'})}
      />
      <Test1Component/>
      <Test2Component/>
      </View>)
    }
  }

  export default DetailScreen;


