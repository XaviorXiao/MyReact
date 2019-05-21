import React from 'react'

import{
 View,
 Text,
}from 'react-native'

class ForgetPasswordScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center' , alignItems:'center'}}>
               <Text > 忘记密码</Text>
            </View>
        )
    }
}

export default ForgetPasswordScreen;