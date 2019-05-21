import React from 'react'

import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet,
    AsyncStorage,
    ImageBackground,
    TouchableHighlight,
} from 'react-native'

import Toast,{DURATION} from 'react-native-easy-toast'

const Dimensions = require('Dimensions')
const {screenWidth, screenHeight} = Dimensions.get('window')

const LoginApi = 'http://api.aladinglife.com/ald/v2/user/login'

class SignInScreen extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           upText: null,
           bottomText: null,
       }
       this._loginSuccessPushApp= this._loginSuccessPushApp.bind(this)
       this._signInAction = this._signInAction.bind(this)
       this._forgetPasswordAction = this._forgetPasswordAction.bind(this)
       this._registerNewUserAction = this._registerNewUserAction.bind(this)
   }

   static navigationOptions = {
       header: null
   }
   render(){
       return(
         <ImageBackground style = {styles.container}
         source = {require('../../images/login_bg.png')}>
        {/* //账号输入 */}
        <Text style = {{marginLeft:16, marginTop: 200, width: 200, height: 30, fontSize: 24, color: '#333333'}}> 欢迎登录此应用 </Text> 
        <View style = {styles.inputZoneStyle}>
        <Text style = {styles.leftTitleStyle}> 账号 </Text>
        <TextInput style = {styles.inputTextStyle}
        placeholder = {'请输入用户名'}
        onChangeText = { (upText) => this.setState({upText})}
        value = {this.state.upText}
        />
        </View>
        {/* //密码输入 */}
        <View style = { styles.inputZoneStyle}>
        <Text style = {styles.leftTitleStyle}> 密码 </Text>
        <TextInput style = {styles.inputTextStyle}
        placeholder = {'请输入密码'}
        onChangeText = { (bottomText) => {(this.setState({bottomText}))}}
        value = {this.state.bottomText}
        />
        </View>
       {/* //注册， 忘记密码 */}
       <View style = {styles.bottomActionStyle}>
       <Button styles = {styles.actionStyle}
       title = '忘记密码'
       onPress = {this._forgetPasswordAction}
       />
       <Button style = {styles.actionStyle}
       title = '立即注册'
       onPress = {this._registerNewUserAction}
       />
       </View>
       {/* //登录按钮 */}

       <TouchableHighlight style = {styles.loginActionStyle}
       onPress = {this._signInAction}>
        <Text style= {{alignItems:'center',justifyContent:'center', padding: 10,fontSize: 18, color:'#ffffff'}}>登录</Text>
       </TouchableHighlight>
       <Toast ref = 'toast'/>
        </ImageBackground>
       )
   }
   //登录
   _signInAction () {
       if(this.state.upText == null){
           this.refs.toast.show('请输入账号')
           return
       }

       if(this.state.bottomText == null){
           this.refs.toast.show('请输入密码')
           return
       }
     fetch(LoginApi,{
         method:'POST',
         headers:{
             Accept:'application/json',
             'Content-Type':'application/json',
         },
         body:JSON.stringify({
            phone:this.state.upText,
            password:this.state.bottomText,
         })
     })
     .then((response) => response.json())
     .then((responseJson) => {
         if(responseJson.code == 1){//请求成功
            this._loginSuccessPushApp()
         }
        
     })
     .catch((error) => {
       console.log(error);
       
     })
   }
   //登陆成功 跳转主页
   _loginSuccessPushApp = async () =>{
    await AsyncStorage.setItem('userToken','abc')
    this.props.navigation.navigate('App')
   }
   //忘记密码
   _forgetPasswordAction(){
       this.props.navigation.navigate('SetPW')
   }
   //立即注册
   _registerNewUserAction(){
       this.props.navigation.navigate('Register')
   }


}

const styles = StyleSheet.create({
    //展示区域的布局
    container: {
       flex:1,
       flexDirection:'column',
       width:screenWidth,
       height:screenHeight,
    },
    inputZoneStyle:{
        flexDirection:'row',
        marginTop: 20,
        height: 30,
    },
    leftTitleStyle: {
        marginLeft: 16,
        width: 60,
        height: 30,
        fontSize:16,
        paddingTop: 7,
    },
    inputTextStyle:{
       flex: 0.8,
       marginLeft: 10,
       height: 30,
       borderColor:'#999',
       borderWidth: 0.5,
       borderRadius:4,
    },
    bottomActionStyle:{
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        justifyContent:'space-between',
        marginTop: 30,
        height: 50
    },
    actionStyle:{
        width: 80,
        height:30,
        fontSize: 12,
    },
    loginActionStyle:{
        marginTop: 100,
        width:200,
        height:50,
        backgroundColor:'#0a1f44',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 25,

    }
    
})

export default SignInScreen;