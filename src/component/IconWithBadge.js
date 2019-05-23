import React from 'react'

import
{
    View,
    Image,
    Text,
} from 'react-native'


class IconWithBadge extends React.Component{
    render(){
        const {
            name,
            badgeCount,
            color,
            size,
        } = this.props;
        return(
            <View style = {{ width: 24,height: 24, margin : 5}}></View>
        )
    }
}

export default IconWithBadge;