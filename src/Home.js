import React from 'react'
import { Text, View,Button,Image,Alert,AsyncStorage,StyleSheet} from 'react-native';

import ViewPager from './component/viewpage'
import HomeItemComponent from './component/HomeItemComponent'



const imageUrls = ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=760528960,2729756840&fm=26&gp=0.jpg', 
     'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558514797592&di=b7404ddc598d9e395f33f36ef883ebf4&imgtype=0&src=http%3A%2F%2Fc4.haibao.cn%2Fimg%2F600_0_100_0%2F1530690356.3493%2F81eaeb56a5255d33fdb280712f3b252d.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558514797592&di=4fc04bc668b9a3ec1e1e75208aeb4b43&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7Po3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F4b90f603738da977a600eedebb51f8198618e31c.jpg'];

const imageUrl =  imageUrls[0];

 class HomeScreen extends React.Component{
   constructor(props){
     super(props)
     this._pushDetail = this._pushDetail.bind(this)
     this.state= {
          backName : 'go to detail'
     }
   }
   static navigationOptions = ({navigation}) => { 
     return{
      title: '首页',//这个属性可以支持自定义组件
      headerRight: (
        <Button onPress = {navigation.getParam('inCreaseCount')}
        title = 'info'
        color = '#ffffff'/>
      ),
     }
   };

   componentDidMount(){
    this.props.navigation.setParams({inCreaseCount : this._inCreaseCount})
  }
  state = {
    count : 0,
  }
  _inCreaseCount = () => {
    this.setState({count : this.state.count + 1})
    Alert.alert(this.state.count)
  }

  //登出操作
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth')
  }

  //进入详情页,传递参数
  _pushDetail(itemId){
    this.props.navigation.navigate('Detail',{
      itemId:itemId,
      otherParas: 'add other params you want',
      callback:(data) => {
        this.setState({
          backName:data
       })
      }
    })
  }
  
  render(){
    console.log('this is home page')
     return(
     <View style = {{ flex : 1 , alignItems: 'center'}}>
     <View style = {{height : 250,alignItems:'center'}}>
     <ViewPager imageUrls ={imageUrls}/>
     <HomeItemComponent _pushDetail = {this._pushDetail.bind(this)}/>
     </View>
     
     <Button onPress = {this._pushDetail}
     title = {this.state.backName}/>
     <Button onPress = {this._signOutAsync}
     title = '退出登录'/>
     <View style = {[styles.test1,styles.test2]}></View>
     </View>
     )
   }
 }

 const styles = StyleSheet.create({
   test1:{
     width: 100,
     height:30,
   },
   test2:{
     backgroundColor: 'red'
   }
 })

 export default HomeScreen;