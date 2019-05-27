import React from 'react'

import
{
   View,
   Image,
   Dimensions

}from 'react-native'

const screenW = Dimensions.get('window').width

class HeaderImage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            imageUrl: null
        }
    }

    _refreshImage(imagesource){
        this.setState({
            imageUrl: imagesource
        })
    }

    render(){
       return(
           <View style = {{width:screenW,height : 120}}>
           <Image style = {{flex: 1,backgroundColor: 'red' }}
           source = {{uri: this.state.imageUrl}}
           />
           </View>
       )
    }

}

export default HeaderImage;