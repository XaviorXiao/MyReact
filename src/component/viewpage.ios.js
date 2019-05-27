import React,{Component} from 'react'
import 
{
    ScrollView,
    Image,
    View,
    Dimensions,
    StyleSheet,
} from 'react-native'

import PropTypes from 'prop-types'

const screenWidth = Dimensions.get('window').width;

 export default class ViewPager extends Component{
    constructor(props){
       super(props);
      
       this._renderPager = this._renderPager.bind(this)
       this._handleScroll = this._handleScroll.bind(this)
       this._renderPageControl = this._renderPageControl.bind(this)
       this.state = {
        currentPage:0
    }
    }
    render(){
        const height = this.props.height || 170;
        console.log('render mian banner')
        return(
            <View style= {{height: height}}>
            <ScrollView
            ref = {(scrollView) => this._scrollView = scrollView} 
            horizontal = {true}
            pagingEnabled = {true}
            showsHorizontalScrollIndicator ={false}
            onMomentumScrollEnd = {this._handleScroll}>
            {this._renderPager()}
            </ScrollView>
            {this._renderPageControl()}
            </View>
        )
    }

    _renderPager(){
        const imageUrls = this.props.imageUrls;
        if(imageUrls == null || imageUrls.length == 0){
            return null
        }
        let count = imageUrls.length
        let pagers = []
        if(count == 1){
            pagers.push(this._renderPagerItem(imageUrls[0],0))
        }else{
            //将最后一张插入到index为0 的位置
            pagers.push(this._renderPagerItem(imageUrls[count -1],0))
            //依次插入
            for(let i = 0 ; i< count; i++){
                pagers.push(this._renderPagerItem(imageUrls[i],i+1))
            }
            //将第一张插入到最后一个位置
            pagers.push(this._renderPagerItem(imageUrls[0],count + 1))
        }
        console.log('render pagers complete')
        return pagers

    }
    _renderPagerItem(url ,key){
        console.log('render item complete');
        return(
            <View key = {key} style = {{flex: 1,flexDirection:'row'}}>
            <Image source = {{uri : url}} style = {styles.image}/>
            </View>
        )
    }
    _renderPageControl(){
        const imageUrls  = this.props.imageUrls;
        if(imageUrls == null || imageUrls.length == 0){
            return null
        }
        let count = imageUrls.length
        let pageControls =[]
        for(let i = 0; i< count; i++){
           let style = styles.circle
           if(this.state.currentPage == i){
               style = [styles.circle,styles.circleSelected]
           }
           pageControls.push((<View style = {style} key = {i}></View>))
        }
        console.log('render pagecontrol complete')
        return(
           <View style = {styles.circleContainer}>
           {pageControls}
           </View>
        )
    }
    _handleScroll(e){
        const count = this.props.imageUrls.length;
        if(count <= 1){
            return
        }

        let offset = e.nativeEvent.contentOffset.x;
        let position = Math.floor(offset /screenWidth)

        let pageNow;
        //当滑动到 index为0 时,跳转到倒数第二页
        if(position == 0){
            pageNow = count -1;
            this._scrollView.scrollTo({x:count * screenWidth,y: 0,animated:false})
        }else if(position == count +1){//滑动到最后一页
            pageNow = 0;
            this._scrollView.scrollTo({x:screenWidth,y: 0, animated: false})
        }else{//不在边界值
            pageNow = position -1;
        }
        this.setState({
            currentPage : pageNow
        });
    }
    

    componentDidMount(){
        let count = this.props.imageUrls.length;
        if(count > 1){
            this._scrollView.scrollTo({x:screenWidth,y: 0,animated:false})
        }

    }

}
const styles = StyleSheet.create({
    image: {
        width: screenWidth,
    },
    circleContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 50,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5
    },
    circleSelected: {
        backgroundColor: 'blue',
    }
});


