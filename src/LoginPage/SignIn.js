import React from 'react'

import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet,
    AsyncStorage,
    SafeAreaView,
} from 'react-native'

const LoginApi = 'http://api.aladinglife.com/ald/v2/user/login'

class SignInScreen extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           upText: null,
           bottomText: null,
       }
       this._signInAsyncAction = this._signInAsyncAction.bind(this)
   }
   render(){
       return(
        <SafeAreaView>
         <View style = {styles.container}>
        {/* //账号输入 */}
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
       />
       <Button style = {styles.actionStyle}
       title = '立即注册'
       />
       </View>
       {/* //登录按钮 */}
       <Button style = {styles.loginActionStyle}
       title = '登录'
       onPress = {this._signInAsyncAction}
       />
        </View>
        </SafeAreaView>
       )
   }
   
   

   _signInAsyncAction = async () => {
    
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
         AsyncStorage.setItem('userToken','abc')
         this.props.navigation.navigate('App')
     })
     .catch((error) => {
       console.log(error);
       
     })
   }


}

const styles = StyleSheet.create({
    //展示区域的布局
    container: {
        // flex : 1,
        flexDirection:'column',
        justifyContent:'flex-start',
        height: 300,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 100,
        marginBottom:0,
        // backgroundColor: '#000000',
    },
    inputZoneStyle:{
        flexDirection:'row',
        // justifyContent:'flex-start',
        marginTop: 20,
        height: 30,
    },
    leftTitleStyle: {
        width: 50,
        height: 30,
        backgroundColor:'red',
    },
    inputTextStyle:{
       flex: 1,
       marginLeft: 15,
       height: 30,
       borderColor:'#999',
       borderWidth: 0.5,
       borderRadius:4,
       
    },
    bottomActionStyle:{
        flex : 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 30,
        height: 50
    },
    actionStyle:{
        width: 80,
        height:30,
    },
    loginActionStyle:{
        marginTop: 50,
        width:200,
        height:50,
        backgroundColor:'blue',
        color: '#fff',
        fontSize: 24,
    }
    
})

export default SignInScreen;