import React, {Component} from "react";
import {ScrollView, Image, View, Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get('window').width;

export default class ViewPager extends Component {
    constructor(props) {
        super(props);
        this._renderPagers = this._renderPagers.bind(this);
        this._handleScroll = this._handleScroll.bind(this);
        this.state = {
            currentPage: 0
        };
    }

    render() {
        const height = this.props.height || 170;
        return (
            <View style={{height:height}}>
                <ScrollView
                    ref={(scrollView) => this._scrollView = scrollView}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this._handleScroll}
                >
                    {this._renderPagers()}
                </ScrollView>

                {this._renderCircles()}
            </View>
        );
    }

    _renderPagers() {
        const imageUrls = this.props.imageUrls;
        if (imageUrls == null || imageUrls.length == 0) {
            return null;
        }

        let len = imageUrls.length;
        let pagers = [];

        if (len == 1) {
            pagers.push(this._renderPagerItem(imageUrls[0], 0));
        } else {
            // 最后一页插入到第 0 个位置
            pagers.push(this._renderPagerItem(imageUrls[len - 1], 0));
            for (let i = 0; i < len; i++) {
                pagers.push(this._renderPagerItem(imageUrls[i], i + 1))
            }
            // 第 0 页插入到最后一个位置
            pagers.push(this._renderPagerItem(imageUrls[0], len + 1));
        }

        return pagers;
    }

    _renderPagerItem(url, key) {
        return (
            <View key={key} style={{flex:1,flexDirection:'row'}}>
                <Image source={{uri:url}} style={styles.image}/>
            </View>
        );
    }

    _renderCircles() {
        const imageUrls = this.props.imageUrls;
        if (imageUrls == null || imageUrls.length <= 1) {
            return null;
        }

        let len = imageUrls.length;
        let circles = [];
        for (let i = 0; i < len; i++) {
            let style = styles.circle;
            if (this.state.currentPage == i) {
                style = [styles.circle, styles.circleSelected];
            }
            circles.push((<View style={style} key={i}/>));
        }

        return (
            <View style={styles.circleContainer}>
                {circles}
            </View>
        );
    }

    componentDidMount() {
        let len = this.props.imageUrls.length;
        if (len > 1) {
            // 默认跳到第一页
            this._scrollView.scrollTo({x: screenWidth, y: 0, animated: false});
        }
    }

    _handleScroll(e) {
        const len = this.props.imageUrls.length;
        if (len <= 1) {
            return;
        }

        let offSet = e.nativeEvent.contentOffset.x;
        let position = Math.floor(offSet / screenWidth);

        let currentPage;
        if (position == 0) {
            // 当到第 0 页时跳转到倒数第二页
            currentPage = len - 1;
            this._scrollView.scrollTo({x: len * screenWidth, y: 0, animated: false});
        } else if (position == len + 1) {
            // 当到最后一页时跳转到第一页
            currentPage = 0;
            this._scrollView.scrollTo({x: screenWidth, y: 0, animated: false});
        } else {
            currentPage = position - 1;
        }

        this.setState({
            currentPage: currentPage
        });
    }
}

// ViewPager.propTypes = {
//     imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
//     height: React.PropTypes.number
// };

const styles = StyleSheet.create({
    image: {
        width: screenWidth,
    },
    circleContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 10,
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
        backgroundColor: '#0f0'
    }
});
