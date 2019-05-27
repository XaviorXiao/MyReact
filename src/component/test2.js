import React from 'react'

import {
  View,
  Text,
  DeviceEventEmitter
} from 'react-native'


class test2Component extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            originTitle: 'origin value'
        }
    }

    componentDidMount(){
        //添加监听者
        this.listener = DeviceEventEmitter.addListener('changeTitle',(changeTitle)=>{
            this.setState({
                originTitle: changeTitle
            })
        })
    }
   
    componentWillUnmount(){
      //销毁监听者
      this.listener.remove()
    }
    render(){
      return(<View>
          <Text style = {{fontSize : 24}}>{this.state.originTitle}</Text>
      </View>)
    }
}

export default test2Component;
