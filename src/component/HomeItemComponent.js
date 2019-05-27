import React from 'react'

import
{
   View,
   Text,
   Image,
   StyleSheet,
   Dimensions,
   Alert,
   TouchableOpacity,

} from 'react-native'

const screenW = Dimensions.get('window').width;

class HomeItemComponent extends React.Component{
    constructor(props){
        super(props);
        this._renderTotalItem = this._renderTotalItem.bind(this);
        // this._clickItemBlock = this._clickItemBlock.bind(this);
    }
    render(){
        return(
            <View style = {styles.container}>
            {this._renderTotalItem()}
            </View>
        )
    }

    _renderTotalItem(){
        //这里不知道为什么把路径作为参数进行传递会进行报错，可能对require函数不熟吧
        const sources = [require('../../images/items/home_item_01.png'),
        require('../../images/items/home_item_02.png'),
        require('../../images/items/home_item_03.png'),
        require('../../images/items/home_item_04.png')]

        let titles = ['item1','item2','item3','item4']
        let items = []
        for(let i = 0; i< 4; i++){
        items.push(this._renderItem(sources[i],titles[i]))
        }
        return items;
    }

    _renderItem(path,title){
        // console.warn(path)
        // console.warn(title)
        return(
            <TouchableOpacity onPress = {this._clickItemBlock.bind(this,title)}>
            <View style = {{flexDirection:'column',margin:10,justifyContent:'center',alignItems:'center'}}>
            <Image
            source = {path}
            style = {{width: 45,height:45}}
            />
            <Text style = {{fontSize: 15,color:'#333',textAlign:'center'}}>{title}</Text>
            </View>
            </TouchableOpacity>
        )
    }

    _clickItemBlock(params,event){
        Alert.alert(params)
        // Alert.alert(event)
       this.props._pushDetail(params);
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        position :'absolute',
        justifyContent:'space-around',
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowOffset: {width: 5,height: 5},
        top: 130,
        width:screenW - 50,

    },
})

export default HomeItemComponent;