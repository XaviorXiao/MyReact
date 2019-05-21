import React from 'react'

import{
 View,
 Text,
}from 'react-native'

class RegisterScreen extends React.Component{
    render(){
        return(
            <View style = {{flex:1, justifyContent:'center' , alignItems:'center'}}>
               <Text > 立即注册</Text>
            </View>
        )
    }
}

export default RegisterScreen;