import React from 'react'

import {
  View,
  Text,
  DeviceEventEmitter,

} from 'react-native'


class test1Component extends React.Component{
    
    render(){
      return(<View>
          <Text style = {{fontSize : 24}}
          onPress = { ()=> {
              DeviceEventEmitter.emit('changeTitle','是时候该改变了')
          }}>change title</Text>
      </View>)
    }
}

export default test1Component;